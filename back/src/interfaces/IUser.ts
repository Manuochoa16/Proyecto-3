import IAppointment from "./IAppointment"
import ICredential from "./ICredential"

interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    dni_number: number
    appointments: IAppointment[]
    credentialsId: ICredential["id"]
}

export default IUser