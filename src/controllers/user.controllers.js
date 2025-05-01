import { request, response } from "express";
import { userServices } from "../services/user.services";

class UserControllers{
    async getAllUser(req, res) {
    try {
        const users = await userServices.getAllUser();
        res.status(200).json({ status: "ok", users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
    }

    async createUser(req, res) {
      try {
        const user = await userServices.createUser(req.body);
        res.status(201).json({ status: "ok", user });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
      }
    }

    async getUserById (req, res) {
    try {
        const user = await userServices.getAllUser({_id: req.params.id})
        res.status(200).json({ status: "ok", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
    }

     async deleteUser(req, res)  {
      try {
        await userServices.deleteUser(req.params.id);
        res.status(200).json({ status: "ok", message: `User id ${req.params.id} remove` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
      }
    }

    async updateUser(req, res) {
      try {
        const userUpdate = await userServices.updateUser(req.params.id, req.body);
        res.status(200).json({ status: "ok", userUpdate });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
      }
    }
}
export const userController = new UserControllers();