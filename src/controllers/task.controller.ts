import { TaskInterface } from "../models/task.model";
import { TaskService } from "../services/task.service";
/**
 * Task Controller
 * @class TaskController
 */

export class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  /**
   * Get all tasks
   * @method getTasks
   * @returns {Promise<Task[]>}
   * @memberof TaskController
   * @example
   * GET /tasks
   * @example
   * curl -X GET http://localhost:3000/tasks
   */
  public async getTasks(): Promise<any> {
    return await this.taskService.getAll();
  }

  /**
   * Get tasks by id
   * @method getTask
   * @param {string} id
   * @returns {Promise<Task>}
   * @memberof TaskController
   * @example
   * GET /tasks/:id
   * @example
   * curl -X GET http://localhost:3000/tasks/1
   */
  public async getTask(id: string): Promise<TaskInterface> {
    return await this.taskService.getOne(id);
  }

  /**
   * Create task
   * @method createTask
   * @param {Task} task
   * @returns {Promise<Task>}
   * @memberof TaskController
   * @example
   * POST /tasks
   * @example
   * curl -X POST http://localhost:3000/tasks
   * @Body
   * {
   * "title": "Task 1",
   * "content": "Task 1 description"
   * }
   */
  public async createTask(task: TaskInterface): Promise<TaskInterface> {
    return await this.taskService.create(task);
  }

  /**
   * Update task
   * @method updateTask
   * @param {string} id
   * @param {Task} task
   * @returns {Promise<Task>}
   * @memberof TaskController
   * @example
   * PUT /tasks/:id
   * @example
   * curl -X PUT http://localhost:3000/tasks/1
   * @Body
   * {
   * "title": "Task 1",
   * "content": "Task 1 description"
   * }
   */
  public async updateTask(
    id: string,
    task: TaskInterface
  ): Promise<TaskInterface> {
    return await this.taskService.update(id, task);
  }

  /**
   * Delete task
   * @method deleteTask
   * @param {string} id
   * @returns {Promise<Task>}
   * @memberof TaskController
   * @example
   * DELETE /tasks/:id
   * @example
   * curl -X DELETE http://localhost:3000/tasks/1
   * @Body
   * {
   * "title": "Task 1",
   * "content": "Task 1 description"
   * }
   */
  public async deleteTask(id: string): Promise<TaskInterface> {
    return await this.taskService.delete(id);
  }
}

