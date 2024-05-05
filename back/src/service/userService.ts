import UserDto from "../dto/UserDto"
import IUser from "../interfaces/IUser"

const users: IUser[] = []

let id: number = 1

//Crear usuario
export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        dni_number: userData.dni_number,
    }
    users.push(newUser);
    id++;
    return newUser;
};

//Obtener todos los usuarios
export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

//Obtener usuario por ID
export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    const user = users.find((user:IUser) => user.id === id);
    return user;
};

