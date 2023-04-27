/**
 * Label Service
 * @class LabelService
 * @implements {Service}
 */

import { Label } from 'src/models/label.model';
import { Service } from './Service.class';

export class LabelService implements Service<Label> {
	constructor() {}

	/**
	 * Get all labels
	 * @method getAll
	 * @returns {Promise<Label[]>}
	 * @memberof LabelService
	 */
	public async getAll(): Promise<Label[]> {
		// return await Label.findAll();
		return [
			{
				id: '1',
				name: 'Label 1',
				description: 'Label 1 description',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];
	}

	/**
	 * Get label by id
	 * @method getOne
	 * @param {string} id
	 * @returns {Promise<Label>}
	 * @memberof LabelService
	 */
	public async getOne(id: string): Promise<Label> {
		// return await Label.findByPk(id);
		return {
			id: '1',
			name: 'Label 1',
			description: 'Label 1 description',
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	/**
	 * Create label
	 * @method create
	 * @param {Label} label
	 * @returns {Promise<Label>}
	 * @memberof LabelService
	 */
	public async create(label: Label): Promise<Label> {
		// return await Label.create(label);
		return {
			id: '1',
			name: 'Label 1',
			description: 'Label 1 description',
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	/**
	 * Update label
	 * @method update
	 * @param {string} id
	 * @param {Label} label
	 * @returns {Promise<Label>}
	 * @memberof LabelService
	 */
	public async update(id: string, label: Label): Promise<Label> {
		// return await Label.update(label, { where: { id } });
		return {
			id: '1',
			name: 'Label 1',
			description: 'Label 1 description',
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	/**
	 * Delete label
	 * @method delete
	 * @param {string} id
	 * @returns {Promise<Label>}
	 * @memberof LabelService
	 */
	public async delete(id: string): Promise<Label> {
		// return await Label.destroy({ where: { id } });
		return {
			id: '1',
			name: 'Label 1',
			description: 'Label 1 description',
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}
}
