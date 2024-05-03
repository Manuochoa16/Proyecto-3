import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response) => {
    res.status(200).send("Listado de todos los turnos de los usuarios");
};

export const getAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Detalle de un turno especifico");
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Listado de todos los turnos de los usuarios");
};

export const cancelAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Listado de todos los turnos de los usuarios");
};

// import { Request, Response } from "express";
// import {
//     getAppointmentsService,
//     getAppointmentByIdService,
//     scheduleAppointmentService,
//     cancelAppointmentService
// } from "../services/appointmentService";

// export const getAppointments = async (req: Request, res: Response) => {
//     try {
//         const appointments = await getAppointmentsService();
//         res.status(200).json(appointments);
//     } catch (error) {
//         res.status(500).json({ message: "Error al obtener los turnos" });
//     }
// }

// export const getAppointment = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//         const appointment = await getAppointmentByIdService(Number(id));
//         if (appointment) {
//             res.status(200).json(appointment);
//         } else {
//             res.status(404).json({ message: "Turno no encontrado" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Error al obtener el turno" });
//     }
// }

// export const scheduleAppointment = async (req: Request, res: Response) => {
//     const appointmentData = req.body;
//     try {
//         const newAppointment = await scheduleAppointmentService(appointmentData);
//         res.status(201).json(newAppointment);
//     } catch (error) {
//         res.status(500).json({ message: "Error al agendar el turno" });
//     }
// }

// export const cancelAppointment = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//         await cancelAppointmentService(Number(id));
//         res.status(200).json({ message: "Turno cancelado correctamente" });
//     } catch (error) {
//         res.status(500).json({ message: "Error al cancelar el turno" });
//     }
// }
