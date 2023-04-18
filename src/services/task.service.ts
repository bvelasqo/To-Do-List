/**
 * Task Service
 * @class TaskService
 * @implements {Service}
 */

import { Task } from 'src/models/task.model'
import { Service } from './Service.class'

export class TaskService implements Service<Task> {
	constructor() {}

	/**
	 * Get all tasks
	 * @method getAll
	 * @returns {Promise<Task[]>}
	 * @memberof TaskService
	 */
	public async getAll(): Promise<Task[]> {
		// return await Task.findAll();
		return [
			{
				id: '1',
				title: 'Task 1',
				content: 'Task 1 description',
				userId: '2c4806e9-307a-4c6e-ba85-9ad1229e35a5',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: '1',
				title: 'Task 2',
				content: 'Task 2 description',
				userId: '2c4806e9-307a-4c6e-ba85-9ad1229e35a5',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]
	}

	/**
	 * Get task by id
	 * @method getOne
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async getOne(id: string): Promise<Task> {
		// return await Task.findByPk(id);
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
	public async create(task: Task): Promise<Task> {
		// return await Task.create(Task);
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
	 * Update task
	 * @method update
	 * @param {string} id
	 * @param {Task} task
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async update(id: string, task: Task): Promise<Task> {
		// return await Task.update(task, { where: { id } });
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
	 * Delete task
	 * @method delete
	 * @param {string} id
	 * @returns {Promise<Task>}
	 * @memberof TaskService
	 */
	public async delete(id: string): Promise<Task> {
		// return await Task.destroy({ where: { id } });
		return {
			id: '1',
			title: 'Task 1',
			content: 'Task 1 description',
			userId: '2c4806e9-307a-4c6e-ba85-9ad1229e35a5',
			createdAt: new Date(),
			updatedAt: new Date(),
		}
	}
}
