import { Request, Response } from "express";
// import { createUserService } from "../services/usersService";
// import IUser from "../interfaces/IUser";


// export const createUser = async (req: Request, res: Response) => {
//     const {name, email, birthdate, dni_number, appointment, active} = req.body;
//     const newUser: IUser = await createUserService({ name, email, birthdate, dni_number, appointment, active })
//     res.status(201).json(newUser);
// }

// Función para obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    // Implementación para obtener todos los usuarios
    res.status(200).send("Obtener todos los usuarios");
}

// Función para obtener un usuario específico
export const getUserById = async (req: Request, res: Response) => {
    // Implementación para obtener un usuario específico por su ID
    res.status(200).send("Obtener un usuario específico");
}

// Función para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
    // Implementación para registrar un nuevo usuario
    res.status(200).send("Registro de usuario");
}

// Función para iniciar sesión de usuario
export const loginUser = async (req: Request, res: Response) => {
    // Implementación para iniciar sesión de un usuario
    res.status(200).send("Login de un usuario");
}


// import { createUserService, getUserService, deleteUserService } from "../services/usersService"
// import IUser from "../interfaces/IUser"

// export const createUser = async (req: Request, res: Response) => {
//     const { name, email, active } = req.body;
//     const newUser: IUser = await createUserService({ name, email, active })
//     res.status(201).json(newUser)
// }


// export const deleteUser = async (req: Request, res: Response) => {
//     const { id } = req.body
//     await deleteUserService(id)
//     res.status(200).json({message:"Eliminado correctamente"})
// }

// // import { Request, Response } from "express";
// // import { getUsersService, getUserByIdService, registerUserService, loginUserService } from "../services/usersService";
// // import IUser from "../interfaces/IUser";


