import IUser from "./IUser";

interface IAppointment {
    id: number,
    date: Date,
    time: number,
    description: string,
    status: boolean,
    userId: IUser["id"],
}

export default IAppointment;