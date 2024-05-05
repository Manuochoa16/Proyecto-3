import AppointmentDto from "../dto/AppointmentDto";
import IAppointment from "../interfaces/IAppointment"

const appointments: IAppointment[] = [];

let id: number = 1

//Crear turno
export const scheduleAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id,
        userId: appointmentData.userId,
        date: appointmentData.date,
        time: appointmentData.time,
        description: appointmentData.description,
        status: appointmentData.status,
        service: appointmentData.service
    }
    appointments.push(newAppointment);
    id++;
    return newAppointment;
}

// Obtener todos los turnos
export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
}

//Obtener un turno especifico por ID
export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    const appointment = appointments.find((appointment:IAppointment) => appointment.id === id);
    return appointment;
};

//Cancelar un turno por ID, creo que hay que cambiarlo
export const cancelAppointmentService = async (id: number): Promise<boolean> => {
    const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);
    if (appointmentIndex !== -1) {
        appointments[appointmentIndex].status = false;
        return true;
    }
    return false;
};