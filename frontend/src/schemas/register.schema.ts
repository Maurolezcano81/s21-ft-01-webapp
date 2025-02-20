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
        .number({ message: "Ingresa un país.", invalid_type_error: "El formato introducido es incorrecto." }),
        city_fk: z
        .number({ message: "Ingresa una ciudad.", invalid_type_error: "El formato introducido es incorrecto." }),
    // dni: z
    //     .instanceof(File)  // Asegúrate de que sea una instancia de File
    //     .refine(
    //         (file) => file?.size > 0,  // Verifica que el archivo tenga un tamaño mayor a 0
    //         { message: "Por favor, carga un archivo de DNI." }
    //     )
    //     .refine(
    //         (file) => file?.type === 'application/pdf',  // Verifica que el archivo sea un PDF
    //         { message: "El archivo debe ser un PDF." }
    //     ),
    password: z
        .string({ message: "La contraseña es obligatoria", invalid_type_error: "El formato introducido es incorrecto." })
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
    repeatpwd: z
        .string({ message: "Las contraseñas deben coincidir", invalid_type_error: "El formato introducido es incorrecto." })
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." })

}).refine((data) => data.password === data.repeatpwd, {
    message: "Las contraseñas no coinciden",
    path: ["repeatpwd"], // Puedes especificar el campo donde debe aparecer el error
});



export type FormDataRegister = z.infer<typeof registerSchema>;
