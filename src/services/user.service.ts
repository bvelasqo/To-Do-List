/**
 * User Service
 * @class UserService
 * @implements {Service}
 */

import { User, UserModel } from "models/user.model";
import { Service } from "./Service.class";
import client from "../shared/db/postgres";

export class UserService implements Service<User> {
  private userRepository = client.getRepository(UserModel);

  public async getAll(): Promise<User[]> {
    return await this.userRepository.find({})
  }

  public async getOne(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { 'id': id }
    });
  }

  public async create(user: User): Promise<User> {
    // TODO: encriptar la contraseña
    return await this.userRepository.save(user);
  }

  public async update(id: number, user: User): Promise<User> {
    // TODO: encriptar la contraseña si se ha modificado
    return await this.userRepository.save(user);
  }

  public async delete(id: number): Promise<User> {
    const user = await this.getOne(id);
    if (user) {
      await this.userRepository.delete(user);
    }
    return user;
  }

  public async login(email: string, password: string): Promise<User> {
    return this.userRepository.findOne({
      where: { 'email': email, 'password': password }
    });
  }
}
