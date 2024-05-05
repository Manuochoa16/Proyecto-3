import { Request, Response } from "express";
import { scheduleAppointmentService, getAppointmentsService, getAppointmentByIdService, cancelAppointmentService } from "../service/appointmentService";
import IAppointment from "../interfaces/IAppointment";


//Obtener todas las citas 
export const getAppointments = async (req: Request, res: Response) => {
    const appointments: IAppointment[] = await getAppointmentsService();
    res.status(200).json(appointments);
};

//Crear cita
export const scheduleAppointment = async (req: Request, res: Response) => {
    const{ userId, date, time, description, status, service } = req.body;
    const newAppointment: IAppointment = await scheduleAppointmentService({ userId, date, time, description, status, service })
    res.status(201).json(newAppointment);
};

//Obtener una cita por ID
export const getAppointmentById = async (req: Request, res: Response) => {
    const { id } = req.body
    const appointment = await getAppointmentByIdService(id);
    
    if (appointment) {
        res.status(200).json(appointment)
    } else {
        res.status(404).json({error: "Turno no encontrado"});
    }
};

//Cancelar turno, creo que hay que cambiarlo
export const cancelAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const appointmentId = parseInt(id);
    
    try {
        const cancelled = await cancelAppointmentService(appointmentId);
        if (cancelled) {
            res.status(200).json({ message: "El turno ha sido cancelado exitosamente." });
        } else {
            res.status(404).json({ error: "No se encontró el turno con el ID proporcionado." });
        }
    } catch (error) {
        console.error("Error al cancelar el turno:", error);
        res.status(500).json({ error: "Error interno del servidor al cancelar el turno." });
    }
};


// //Cancelar turno
// export const cancelAppointment = async (req: Request, res: Response) => {
//     res.status(200).send("Listado de todos los turnos de los usuarios");
// };