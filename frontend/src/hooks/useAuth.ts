import { useMutation, useQuery } from '@tanstack/react-query'
import { getAuthStatus } from '../service/Auth'
import { register } from '../service/authService'
import { RegisterUser } from '../types/User.types'

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getAuthStatus,
  })
}

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: (data: RegisterUser) => register(data),
    onSuccess: (data) => {
      console.log("Finalizo la operación de registro");
      console.log("Datos de la operación: ", data);
    },
    onError: (error: Error) => {
      const errorMessage = error.message.split(": ").pop();
      console.error("Error en el registro:", errorMessage);
    }
  })

  return mutation
}