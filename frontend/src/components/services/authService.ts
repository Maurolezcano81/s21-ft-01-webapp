import { RegisterUser } from "../../types/User.types";

export const AuthService = {


    async register(data: RegisterUser) {
        const api = 'asd'

        const response = await fetch(`${api}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();

            throw errorData;
        }

        const dataFetch = await response.json()

        return dataFetch.usuario;
    }

}