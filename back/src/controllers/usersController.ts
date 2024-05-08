import { Request, Response } from 'express'; 
import  UserDto from '../dto/UserDto'; 
import { createUserService, getUsersService, deleteUserService, getUserByIdService } from "../service/usersService" 
import {findUserByCredentialId, validateCredential} from "../service/credentialService"
import { User } from '../entities/User';
import UserRepository from '../repositories/UserRepository';

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: UserDto = req.body; 
        const newUser = await createUserService(userData); 
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creando el usuario' });
    }
};

// Controlador para obtener todos los usuarios
export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users:User[] = await getUsersService(); 
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

// Controlador para eliminar un usuario por su ID
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = parseInt(req.params.id);
        await deleteUserService(userId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user.' });
    }
};

// Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user: User | null = await getUserByIdService(Number(id))
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({message: "El usuario no fue encontrado."})
    }
};

export const validateCredentialController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
         const credential = await validateCredential(username, password);
        if(credential)
            { 
                const user = await findUserByCredentialId(credential)
                res.status(200).json({ loggin:true, user });
            }
        
    } catch (error) {
        res.status(400).json({ message: 'Los datos son incorrectos.' });
    }
};
