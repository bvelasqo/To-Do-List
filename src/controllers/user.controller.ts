/**
 * User Controller
 * @class UserController
 */

import {User} from "models/user.model";
import { UserService } from "services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Get all users
   * @method getUsers
   * @returns {Promise<User[]>}
   * @memberof UserController
   * @example
   * GET /users
  */
  public async getUsers(): Promise<User[]> {
    return await this.userService.getAll();
  }

  /**
   * Get user by id
   * @method getUser
   * @param {string} id
   * @returns {Promise<User>}
   * @memberof UserController
   * @example
   * GET /users/:id
   */
  public async getUser(id: string): Promise<User> {
    try {
      const _id = parseInt(id);
      return await this.userService.getOne(_id);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("Invalid id");
      }
    }
  }

  /**
   * Create user
   * @method createUser
   * @param {User} user
   * @returns {Promise<User>}
   * @memberof UserController
   * @example
   * POST /users
   */
  public async createUser(user: User): Promise<User> {
    return await this.userService.create(user);
  }

  /**
   * Update user
   * @method updateUser
   * @param {string} id
   * @param {User} user
   * @returns {Promise<User>}
   * @memberof UserController
   * @example
   * PUT /users/:id
   */
  public async updateUser(id: string, user: User): Promise<User> {
    try {
      const _id = parseInt(id);
      return await this.userService.update(_id, user);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("Invalid id");
      }
    }
  }

/**
 * Delete user
 * @method deleteUser
 * @param {string} id
 * @returns {Promise<User>}
 * @memberof UserController
 * @example
 * DELETE /users/:id
 */
  public async deleteUser(id: string): Promise<User> {
    try {
      const _id = parseInt(id);
      return await this.userService.delete(_id);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("Invalid id");
      }
    }
  }
}
