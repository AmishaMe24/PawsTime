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
      return res.status(400).json({error: 'No such appointment'})
    }
  
    const appointment = await appointMentSchema.findOneAndDelete({_id: id})
  
    if(!appointment) {
      return res.status(400).json({error: 'No such appointment'})
    }
  
    res.status(200).json(appointment)
  }
  
  // update a appointment
  export const UpdateAppointment = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such appointment'})
    }
  
    const appointment = await appointMentSchema.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!appointment) {
      return res.status(400).json({error: 'No such appointment'})
    }
  
    res.status(200).json(appointment)
  }
