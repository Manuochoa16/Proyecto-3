import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    description: string

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "userId"})
    userId: number

    @Column({
        default: "active"
    })
    status: "active" | "cancelled"
}
