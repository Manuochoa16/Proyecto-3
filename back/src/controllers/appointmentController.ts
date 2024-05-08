import { Request, Response } from 'express';
import { createAppointment, cancelAppointment, getAppointmentById, getAllAppointment } from '../service/appointmentService';
import UserDto from '../dto/UserDto';

export const getAllAppointmentsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointments = await getAllAppointment();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error al obtener todas las citas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const createAppointmentController = async (req: Request, res: Response): Promise<void> => {
  const { userId, date, time } = req.body;
  console.log(userId)
  try {
    const appointment = await createAppointment(userId, date, time);
    if (appointment) {
      res.status(201).json(appointment);
    } else {
      res.status(400).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    console.error("Error al crear la cita:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const cancelAppointmentController = async (req: Request, res: Response): Promise<void> => {
    const appointmentId = parseInt(req.params.id);
    try {
      await cancelAppointment(appointmentId);
      res.status(200).json({ message: "Turno cancelado" });
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
      res.status(404).json({ message: "El turno no fue encontrado." });
    }
  }

export const getAppointmentByIdController = async (req: Request, res: Response): Promise<void> => {
  const appointmentId = parseInt(req.params.id);
  try {
    const appointment = await getAppointmentById(appointmentId);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el turno por ID:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
