export interface User {
    id_user: number
    name?: string,
    last_name?: string,
    email: string,
    birth_date?: Date,
    phone: string,
    country_id: number,
    city_id: number,
    dni: string,
    dni_photo?: File | null,
    password: string,
    repeatPwd?: string,
    account_id?: number,
    account_number?: string
}

export interface LoginResponse {
    message: string;
    user: {
        id_user: number;
        name: string;
        last_name: string;
        email: string;
        phone: string
    };
}

export type RegisterUser = Partial<User>

export type LoginCredentials = Pick<User, 'email' | 'password'>
export type UserLogged = Pick<User, 'id_user' | 'name' | 'account_id' | 'account_number'>