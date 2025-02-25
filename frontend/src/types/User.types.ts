export interface User {
    id: number
    name: string,
    email: string,
    birth_date: Date,
    phone: string,
    country_fk: number,
    city_fk: number,
    dni_photo?: File | null,
    password: string,
    repeatPwd?: string
}

export type RegisterUser = Omit<User, 'id'>