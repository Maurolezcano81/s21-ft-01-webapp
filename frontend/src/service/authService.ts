import { url_api, urlEndpoints } from '../globals'
import { RegisterUser } from '../types/User.types'

export const register = async (data: RegisterUser): Promise<RegisterUser> => {
  const response = await fetch(`${url_api}/${urlEndpoints.register}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  let responseJSON;

  // Si la respuesta es exitosa
  if (response.ok) {
    try {
      responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.error('Error al procesar el JSON:', error);
      throw new Error("Error al procesar la respuesta del servidor");
    }
  }

  // Si la respuesta no es exitosa, maneja el error
  try {
    responseJSON = await response.json();
    throw new Error(responseJSON?.error || "Ha ocurrido un error al registrarse, intentelo nuevamente reiniciando el sitio");
  } catch (error) {
    // Si no hay contenido JSON en el cuerpo, maneja el error de manera genérica
    console.log(error)
    throw new Error("Ha ocurrido un error desconocido al registrarse");
  }
}
