import { z } from 'zod';
import { phoneRegex } from '../utils/regex';

export const registerSchema = z.object({
    name: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .min(1, { message: "Debes introducir tu nombre y apellido" }),
    email: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .email({ message: "Debes introducir un email valido." }),
    birth_date: z
        .date({ message: "Ingresa una fecha de nacimiento.", invalid_type_error: "El formato introducido es incorrecto." })
        .refine((val) => !isNaN(val.getTime()), {
            message: "La fecha no es válida.",
        }),
    phone: z
        .string()
        .refine((val) => phoneRegex.test(val), { message: "Número de teléfono invalido." }),
    country_fk: z
        .string({ message: "Ingresa un país.", invalid_type_error: "El formato introducido es incorrecto." }),
    city_fk: z
        .string({ message: "Ingresa una ciudad.", invalid_type_error: "El formato introducido es incorrecto." }),
    dni: z
        .instanceof(File, { message: "El Dni o pasaporte es obligatorio" })
        .refine((file) => file && file.size > 0, { message: "Por favor, carga un archivo de DNI." })
        .refine((file) => file && file.type === 'application/pdf', { message: "El archivo debe ser un PDF." }),
    password: z
        .string({ message: "La contraseña es obligatoria", invalid_type_error: "El formato introducido es incorrecto." })
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
    repeatpwd: z
        .string({ message: "Las contraseñas deben coincidir", invalid_type_error: "El formato introducido es incorrecto." })
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." })
});

export type FormDataRegister = z.infer<typeof registerSchema>;
