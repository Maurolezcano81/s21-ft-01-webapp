import {bcryptAdapter} from "../../config/bcrypt.adapter";
import jwt from "jsonwebtoken";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserService } from "./user.service";
import { AccountService } from "./account.service";

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

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
interface UserLogin {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    address: string;
    phone: string;
    birth_date: string;
    city_id: number;
}

export class AuthService {
    constructor(private userService: UserService, private accountService: AccountService) {}

    public async register(user: UserRegister) {
        if (!user.name) throw new Error(`name missing`);
        if (!user.last_name) throw new Error(`last_name missing`);
        if (!user.email) throw new Error(`email missing`);
        if (!user.dni) throw new Error(`dni missing`);
        if (!user.password) throw new Error(`password missing`);
        if (!user.address) throw new Error(`address missing`);
        if (!user.phone) throw new Error(`phone missing`);
        if (!user.birth_date) throw new Error(`birth_date missing`);
        if (user.city_id === undefined || user.city_id === null) throw new Error(`city_id missing`);

        try {
            const newUser = await this.userService.create(user);

            const token = await JwtAdapter.generateToken({ 
                user_id: newUser.user_id, 
                name: newUser.name, 
                last_name: newUser.last_name 
            });
          

            if (!token) throw new Error('Error while creating JWT');
            await this.accountService.registerAccount(newUser.user_id)

            return { newUser, token };
        } catch (error) {
            throw new Error(`Internal server error: ${error instanceof Error ? error.message : error}`);
        }
    }

    public async loginUser(email: string, password: string) {
        const user = await this.userService.getByEmail(email);
        if (!user) throw new Error("User not found");
        
        const userLogin = this.filterUserData(user);
        const isMatch = await bcryptAdapter.compare(password, user.password);
        if (!isMatch) return null;

        const token = jwt.sign({ userLogin }, SECRET_KEY, { expiresIn: "1h" });
        return token;
    }

    public verifyToken(token: string) {
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch (err) {
            return null;
        }
    }
    public filterUserData = (user: any): UserLogin => {
        const { name, last_name, email, dni, address, phone, birth_date, city_id } = user.dataValues;
        return { name, last_name, email, dni, address, phone, birth_date, city_id };
    };
}
