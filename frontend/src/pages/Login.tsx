import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom"; // Asegúrate de importar correctamente

import RightLogin from "../components/login/RightLogin";
import EmailSection from "../components/login/EmailSection";
import PasswordSection from "../components/login/PasswordSection";
import { FormDataLogin, loginSchema } from "../schemas/login.schema";
import Silueta from 'frontend/src/svgs/silueta.png';

const Login: React.FC = () => {
    // Configuración del formulario con react-hook-form
    const methods = useForm<FormDataLogin>({
        resolver: zodResolver(loginSchema),
        mode: "onChange", // Validar en tiempo real
    });

    // Función que se ejecuta al enviar el formulario
    const onSubmit = (data: FormDataLogin) => {
        console.log(data);
    };

    return (
        <div className="flex min-h-screen">
            {/* Contenedor del formulario (izquierda) */}
            <div className="w-full md:w-6/12 bg-white flex items-center justify-center p-8">
                <FormProvider {...methods}>
                    <form
                        className="w-full max-w-md flex flex-col gap-4"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <img
                                src={Silueta}
                                alt="Logo"
                                className="w-32 h-32 object-contain"
                            />
                        </div>

                        {/* Título de bienvenida */}
                        <div className="mb-8 text-center">
                            <h4 className="font-monserrat text-black text-2xl md:text-[32px]">
                                <b>¡Hola! 👋</b>
                            </h4>
                            <h4 className="font-monserrat text-black text-2xl md:text-[32px]">
                                <b>Te damos la bienvenida</b>
                            </h4>
                        </div>

                        {/* Sección de correo electrónico */}
                        <EmailSection />

                        {/* Sección de contraseña */}
                        <PasswordSection />

                        {/* Botón de envío */}
                        <button
                            type="submit"
                            className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                            aria-label="Iniciar sesión"
                        >
                            Iniciar sesión
                        </button>

                        {/* Enlace al registro */}
                        <Link
                            to="/register" // Ruta de la página de registro
                            className="w-full text-center text-gray-600 text-lg mt-4"
                            aria-label="Registrarse"
                        >
                            ¿No tienes una cuenta?{" "}
                            <span className="font-bold text-blue-600 hover:underline">
                                Regístrate
                            </span>
                        </Link>
                    </form>
                </FormProvider>
            </div>

            {/* Componente de la derecha (fondo azul) */}
            <div className="hidden md:flex md:w-6/12 bg-primary items-center justify-center">
                <RightLogin />
            </div>
        </div>
    );
};

export default Login;

