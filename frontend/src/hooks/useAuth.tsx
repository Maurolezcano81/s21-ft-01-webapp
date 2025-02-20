import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { RegisterUser, User } from "../types/User.types";
import { AuthService } from "../components/services/authService";


export const useAuth = () => {

    // const { setUser } = useAuthStore();

    const navigate = useNavigate();

    const mutation = useMutation<User, Error, RegisterUser>({
        mutationFn: AuthService.register,
        onSuccess: (data) => {
            const userData = data;
            // setUser(userData);
            setTimeout(() => {
                navigate('/')
            }, 2000)
        },

    })

    return mutation

}