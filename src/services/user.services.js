import { userDao } from "../persistence/dao/user.dao";

class UserServices {

    async getAllUser() {
        return await userDao.getAll();
    }

    async createUser(dataUser) {
        return await userDao.create(dataUser);
    }

    async getUserById(uid){
        return await userDao.getOne(uid);
    }

    async deleteUser(uid){
        return await userDao.remove(uid)
    }

    async updateUser(uid,dataUser){
        return await userDao.update(uid,dataUser)
    }
}

export const userServices = new UserServices();