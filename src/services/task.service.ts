/**
 * Task Service
 * @class TaskService
 * @implements {Service}
 */

import { TaskModel, TaskInterface } from '../models/task.model'
import { Service } from './Service.class'

export class TaskService implements Service<TaskInterface> {
	constructor() {}

	/**
	 * Get all tasks
	 * @method getAll
	 * @returns {Promise<Document[]>}
	 * @memberof TaskService
	 */
	public async getAll(): Promise<TaskInterface[]> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Get task by id
	 * @method getOne
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async getOne(id: string): Promise<TaskInterface> {
		return {
			id: '1',
			title: 'Task 1',
			content: 'Task 1 description',
			userId: '2c4806e9-307a-4c6e-ba85-9ad1229e35a5',
			createdAt: new Date(),
			updatedAt: new Date(),
		}
	}

	/**
	 * Create task
	 * @method create
	 * @param {Task} task
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async create(task: TaskInterface): Promise<TaskInterface> {
		// return await TaskModel.create(task);
		throw new Error("Method not implemented.");
	}

	/**
	 * Update task
	 * @method update
	 * @param {string} id
	 * @param {Task} task
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async update(id: string, task: TaskInterface): Promise<any> {
		// return await TaskModel.update(task, { where: { id } });
		throw new Error("Method not implemented.");
	}

	/**
	 * Delete task
	 * @method delete
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async delete(id: string): Promise<any> {
		// return await TaskModel.destroy({ where: { id } });
		throw new Error("Method not implemented.");
	}
}
