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
	public async getAll(): Promise<any[] | string> {
		try {
			return await TaskModel.scan().exec()
		} catch (error) {
			return 'Get operation failed.'
		}
	}

	/**
	 * Get task by id
	 * @method getOne
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async getOne(sk: string, pk: string): Promise<any> {
		try {
			return await TaskModel.get({ sk, pk })
		} catch (error) {
			return 'Get operation failed.'
		}
	}

	/**
	 * Create task
	 * @method create
	 * @param {Task} task
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async create(task: TaskInterface): Promise<any> {
		try {
			return await TaskModel.create(task)
		} catch (error) {
			return 'Create operation failed.'
		}
	}

	/**
	 * Update task
	 * @method update
	 * @param {string} id
	 * @param {Task} task
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async update(pk: string, task: TaskInterface, sk: string): Promise<any> {
		try {
			return await TaskModel.update({ sk, pk }, task)
		} catch (error) {
			return 'Update operation failed.'
		}
	}

	/**
	 * Delete task
	 * @method delete
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async delete(pk: string, sk: string): Promise<any> {
		try {
			await TaskModel.delete({ pk, sk })
			return 'Delete operation was successful.'
		} catch (error) {
			return 'Delete operation failed.'
		}
	}
}
