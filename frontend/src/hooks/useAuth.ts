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
      console.log("Registro exitoso");
      console.log(data);
    },
    onError(error: Error) {
      console.log("Error en el registro");
      console.log(error)
    }
  })

  return mutation
}