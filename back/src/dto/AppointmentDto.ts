interface AppointmentDto {
    userId: number,
    date: Date,
    time: number,
    description: string,
    status: boolean,
    service: string
}

export default AppointmentDto;