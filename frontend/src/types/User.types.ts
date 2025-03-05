export interface User {
    id: number
    name: string,
    last_name: string,
    email: string,
    birth_date: Date,
    phone: string,
    country_id: number,
    city_id: number,
    dni: string,
    dni_photo?: File | null,
    password: string,
    repeatPwd?: string
}

export type RegisterUser = Omit<User, 'id'>