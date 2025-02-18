

export class GenericService {

    constructor() { }

    public async create(creationData: any) {
        return {
            message: 'create ok',
            creationData
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

    public async update(data: any) {
        return 'update ok'
    }

    public async deleteByID(id: any) {
        return 'deleteByID ok'
    }


}