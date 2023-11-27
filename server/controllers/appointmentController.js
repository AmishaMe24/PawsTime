import appointMentSchema from "../models/appointmentModel.js";
import mongoose from "mongoose";

// get all appointments
export const GetAppointments = async (req, res) => {
  const appointments = await appointMentSchema.find({}).sort({ createdAt: -1 });

  res.status(200).json(appointments);
};

// get a single appointment
export const GetAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such appointment" });
  }

  const appointment = await appointMentSchema.findById(id);

  if (!appointment) {
    return res.status(404).json({ error: "No such appointment" });
  }

  res.status(200).json(appointment);
};

export const CreateAppointMent = async (req, res, next) => {
  const user_id = req.user._id;
  req.body.user_id = user_id;
  const saveAppoint = new appointMentSchema(req.body);
  try {
    const addAppointment = await saveAppoint.save();
    res.status(200).json(addAppointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a appointment
export const DeleteAppointment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such appointment' })
  }

  const appointment = await appointMentSchema.findOneAndDelete({ _id: id })

  if (!appointment) {
    return res.status(400).json({ error: 'No such appointment' })
  }

  res.status(200).json(appointment)
}

// update a appointment
export const UpdateAppointment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such appointment' })
  }

  const appointment = await appointMentSchema.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!appointment) {
    return res.status(400).json({ error: 'No such appointment' })
  }

  res.status(200).json(appointment)
}

export const GetAvailableTimeSlots = async (req, res) => {
  const appointmentDate = req.body.appointmentDate;
  const serviceType = req.body.serviceType;

  const bookedAppointments = await appointMentSchema.find({ appointmentDate: appointmentDate, serviceType: serviceType });

  const bookedSlots = bookedAppointments.map(appointment => appointment.appointmentTime);
  var allTimeSlots = [];

  console.log('booked slots:', bookedSlots);

  if (serviceType === 'Veterinary') {

    const startHour = 9;
    const endHour = 15;
    const intervalMinutes = 30;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += intervalMinutes) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const timeSlot = `${formattedHour}:${formattedMinute} ${hour >= 12 ? 'PM' : 'AM'}`;

        allTimeSlots.push(timeSlot);
      }
    }
  }
  else {
    allTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
  }
  const availableTimeSlots = allTimeSlots.filter(slot => !bookedSlots.includes(slot))
  res.status(200).json(availableTimeSlots);
}

