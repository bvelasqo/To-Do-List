import { Label } from '../models/label.model';
import { LabelService } from '../services/label.service';
/**
 * Label Controller
 * @class LabelController
 */

export class LabelController {
	private labelService: LabelService;

	constructor() {
		this.labelService = new LabelService();
	}

	/**
	 * Get all labels
	 * @method getLabels
	 * @returns {Promise<Label[]>}
	 * @memberof LabelController
	 * @example
	 * GET /labels
	 * @example
	 * curl -X GET http://localhost:3000/labels
	 */
	public async getLabels(): Promise<Label[]> {
		return await this.labelService.getAll();
	}

	/**
	 * Get label by id
	 * @method getLabel
	 * @param {string} id
	 * @returns {Promise<Label>}
	 * @memberof LabelController
	 * @example
	 * GET /labels/:id
	 * @example
	 * curl -X GET http://localhost:3000/labels/1
	 */
	public async getLabel(id: string): Promise<Label> {
		return await this.labelService.getOne(id);
	}

	/**
	 * Create label
	 * @method createLabel
	 * @param {Label} label
	 * @returns {Promise<Label>}
	 * @memberof LabelController
	 * @example
	 * POST /labels
	 * @example
	 * curl -X POST http://localhost:3000/labels
	 * @Body
	 * {
	 * "name": "Label 1",
	 * "description": "Label 1 description"
	 * }
	 */
	public async createLabel(label: Label): Promise<Label> {
		return await this.labelService.create(label);
	}

	/**
	 * Update label
	 * @method updateLabel
	 * @param {string} id
	 * @param {Label} label
	 * @returns {Promise<Label>}
	 * @memberof LabelController
	 * @example
	 * PUT /labels/:id
	 * @example
	 * curl -X PUT http://localhost:3000/labels/1
	 * @Body
	 * {
	 * "name": "Label 1",
	 * "description": "Label 1 description"
	 * }
	 */
	public async updateLabel(id: string, label: Label): Promise<Label> {
		return await this.labelService.update(id, label);
	}

	/**
	 * Delete label
	 * @method deleteLabel
	 * @param {string} id
	 * @returns {Promise<Label>}
	 * @memberof LabelController
	 * @example
	 * DELETE /labels/:id
	 * @example
	 * curl -X DELETE http://localhost:3000/labels/1
	 * @Body
	 * {
	 * "name": "Label 1",
	 * "description": "Label 1 description"
	 * }
	 */
	public async deleteLabel(id: string): Promise<Label> {
		return await this.labelService.delete(id);
	}
}
