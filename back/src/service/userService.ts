import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto"
import { User } from "../entities/User";
import IUser from "../interfaces/IUser"

const users: IUser[] = []

let id: number = 1

//Crear usuario
export const registerUserService = async (userData: UserDto) => {
    const user = await UserModel.create(userData)
    const result = await UserModel.save(user);
    return user;
};

//Obtener todos los usuarios
export const getUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find();
    return users;
}

//Obtener usuario por ID
export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({
        id
    })
    return user
};

// //Obtener todos los usuarios
// export const getUsersService = async (): Promise<IUser[]> => {
//     return users;
// }


// //Crear usuario
// export const registerUserService = async (userData: UserDto): Promise<IUser> => {
//     const newUser: IUser = {
//         id,
//         name: userData.name,
//         email: userData.email,
//         birthdate: userData.birthdate,
//         dni_number: userData.dni_number,
//     }
//     users.push(newUser);
//     id++;
//     return newUser;
// };

// //Obtener usuario por ID
// export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
//     const user = users.find((user:IUser) => user.id === id);
//     return user;
// };