/**
 * Label Service
 * @class LabelService
 * @implements {Service}
 */

import { LabelInterface, Label } from 'models/label.model';
import { Service } from './Service.class';

export class LabelService implements Service<LabelInterface> {
	constructor() {}

	/**
	 * Get all labels
	 * @method getAll
	 * @returns {Promise<Label[]>}
	 * @memberof LabelService
	 */
	public async getAll(): Promise<any[]> {
		return await Label.find({});
	}

	/**
	 * Get label by id
	 * @method getOne
	 * @param {string} id
	 * @returns {Promise<LabelInterface>}
	 * @memberof LabelService
	 */
	public async getOne(id: string): Promise<LabelInterface> {
		return await Label.findById(id)
	}

	/**
	 * Create label
	 * @method create
	 * @param {LabelInterface} label
	 * @returns {Promise<LabelInterface>}
	 * @memberof LabelService
	 */
	public async create(label: LabelInterface): Promise<LabelInterface> {
		return await Label.create(label);
	}

	/**
	 * Update label
	 * @method update
	 * @param {string} id
	 * @param {LabelInterface} label
	 * @returns {Promise<LabelInterface>}
	 * @memberof LabelService
	 */
	public async update(id: string, label: LabelInterface): Promise<LabelInterface> {
		return await Label.findOneAndUpdate({ _id: id }, label, { new: true })
	}

	/**
	 * Delete label
	 * @method delete
	 * @param {string} id
	 * @returns {Promise<LabelInterface>}
	 * @memberof LabelService
	 */
	public async delete(id: string): Promise<LabelInterface> {
		return await Label.findOneAndDelete({ _id: id })
	}
}
