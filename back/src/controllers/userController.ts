import { Request, Response } from "express";
import { registerUserService, getUsersService, getUserByIdService } from "../service/userService";
import IUser from "../interfaces/IUser";


export const registerUser = async (req: Request, res: Response) => {
    const {name, email, birthdate, dni_number} = req.body;
    const newUser: IUser = await registerUserService({ name, email, birthdate, dni_number })
    res.status(201).json(newUser);
};

//Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
};


// Función para iniciar sesión de usuario
export const loginUser = async (req: Request, res: Response) => {
    // Implementación para iniciar sesión de un usuario
    res.status(200).send("Login de un usuario");
};

//Prueba para Obtener usuario por ID
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.body
    const user = await getUserByIdService(id);

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({error: "Usuario no encontrado"});
    }
};
