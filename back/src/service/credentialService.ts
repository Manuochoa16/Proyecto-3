import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];

let nextId: number = 1;

// Crear el nuevo par de credenciales
export const createCredentialService = async (username: string, password: string): Promise<number> => {

    const newCredential: ICredential = {
        id: nextId,
        username: username,
        password: password
    };

    nextId++;

    credentials.push(newCredential);

    return newCredential.id;
};


// Buscar el usuario por su nombre de usuario
export const validateCredentialsService = async (username: string, password: string): Promise<number | null> => {
    const user = credentials.find((credential) => credential.username === username);
    if (!user) {
        return null;
    }
// Verificar si la contraseña ya existe
    if (user.password === password) {
        return user.id;
    } else {
        return null;
    }
};