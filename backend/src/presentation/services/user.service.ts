import { bcryptAdapter } from "../../config/bcrypt.adapter";
import User from "../../data/models/user.model"


export class UserService {

    constructor() { }

    public async create(user: any) {
        try {

            await this.getByDni(user.dni);
            user.status = false;
            user.password = bcryptAdapter.hash(user.password);
            const newUser = await User.create(user)
            return newUser

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        return 'getAll ok'
    }

    public async getByID(id: any) {
        return {
            message: 'getByID ok',
            id
        }
    }

    public async getByEmail(email: any) {
        const res = await User.findOne({ where: { email } })

        if (res) throw new Error('Email already exists')
        return
    }

    public async getByDni(dni: string) {
        const res = await User.findOne({ where: { dni } })

        if (res) throw new Error('DNI already exists')
        return
    }

    public async update(data: any) {
        return 'update ok'
    }

    public async deleteByID(id: any) {
        return 'deleteByID ok'
    }


}