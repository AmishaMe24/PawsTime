import mongoose from 'mongoose';
const appointMentSchema = new mongoose.Schema({
    // username:{
    //     type: String,
    //     required:true,
    // }, 
    phone:{
        type: String,
    },
    email:{
        type: String,
        required:true,
    }, 
    pet:{
        type: String,
        enum: ['Dog', 'Cat'],
        required:true,
    },
    age:{
        type: String
    },
    weight:{
        type: String,
    },
    serviceType:{
        type: String,
        enum: ['Vaccination', 'Treatment', 'Grooming', 'Veterinary'],
        required:true,
    },
    appointmentDate:{
        type: String,
        required:true
    },
    // staff_id:{
    //     type: String,
    //     required:true
    // },
    // user_id:{
    //     type: String,
    //     required:true
    // }
}, {timestamps: true})

export default mongoose.model('Appointments', appointMentSchema)