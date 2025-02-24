import { JwtAdapter } from "../../config/jwt.adapter";
import { UserService } from "./user.service";

interface UserRegister {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    password: string;
    address: string;
    phone: string;
    birth_date: string;
    city_id: number;
}

export class AuthService {


    constructor(private userService: UserService) { }

    public async register(user: UserRegister) {

        if (!user.name) throw new Error(`name missing`);
        if (!user.last_name) throw new Error(`last_name missing`);
        if (!user.email) throw new Error(`email missing`);
        if (!user.dni) throw new Error(`dni missing`);
        if (!user.password) throw new Error(`password missing`);
        if (!user.address) throw new Error(`address missing`);
        if (!user.phone) throw new Error(`phone missing`);
        if (!user.birth_date) throw new Error(`birth_date missing`);
        if (!user.city_id) throw new Error(`city_id missing`);

        try {
            const newUser = await this.userService.create(user)

            const token = await JwtAdapter.generateToken({ user_id: newUser.user_id, name: newUser.name, last_name: newUser.last_name });
            if (!token) throw new Error('Error while creating JWT');

            return { newUser, token }

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }


    }



}