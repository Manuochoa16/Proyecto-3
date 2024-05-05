import { Request, Response } from "express";
import { createCredentialService, validateCredentialsService } from "../service/credentialService";

export const createCredentialController = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Llama a la función del servicio para crear el nuevo par de credenciales
        const newCredentialId = await createCredentialService(username, password);
        
        // Devuelve una respuesta con el ID del nuevo par de credenciales creado
        res.status(201).json({ id: newCredentialId });
    } catch (error) {
        // Manejo de errores
        console.error("Error al crear el par de credenciales:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const validateCredentialsController = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Llama a la función del servicio para validar las credenciales
        const credentialId = await validateCredentialsService(username, password);

        if (credentialId !== null) {
            // Si las credenciales son válidas, devuelve el ID del par de credenciales
            res.status(200).json({ id: credentialId });
        } else {
            // Si las credenciales no son válidas, devuelve un mensaje de error
            res.status(401).json({ error: "Credenciales inválidas" });
        }
    } catch (error) {
        // Manejo de errores
        console.error("Error al validar las credenciales:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};