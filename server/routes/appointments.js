import express from 'express';
import appointMentSchema from '../models/appointmentModel.js';
import requireAuth from '../middlewares/requireAuth.js';
import {CreateAppointMent, GetAppointments, GetAppointment, DeleteAppointment, UpdateAppointment} from '../controllers/appointmentController.js';

const router = express.Router();

// require auth for all appointment routes
router.use(requireAuth)

// GET all appointments
router.get('/', GetAppointments)

// GET a single appointment
router.get('/:id', GetAppointment)

// POST a new appointment
router.post('/', CreateAppointMent);

// DELETE a appointment
router.delete('/:id', DeleteAppointment);

// UPDATE a appointment
router.patch('/:id', UpdateAppointment);


export default router;