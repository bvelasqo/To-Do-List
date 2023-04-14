import { Category } from "../models/category.model";
import { CategoryService } from "../services/category.service";
/**
 * Category Controller
 * @class CategoryController
 */

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  /**
   * Get all categories
   * @method getCategories
   * @returns {Promise<Category[]>}
   * @memberof CategoryController
   * @example
   * GET /categories
   * @example
   * curl -X GET http://localhost:3000/categories
   */
  public async getCategories(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  /**
   * Get category by id
   * @method getCategory
   * @param {string} id
   * @returns {Promise<Category>}
   * @memberof CategoryController
   * @example
   * GET /categories/:id
   * @example
   * curl -X GET http://localhost:3000/categories/1
   */
  public async getCategory(id: string): Promise<Category> {
    return await this.categoryService.getOne(id);
  }

  /**
   * Create category
   * @method createCategory
   * @param {Category} category
   * @returns {Promise<Category>}
   * @memberof CategoryController
   * @example
   * POST /categories
   * @example
   * curl -X POST http://localhost:3000/categories
   * @Body
   * {
   * "name": "Category 1",
   * "description": "Category 1 description"
   * }
   */
  public async createCategory(category: Category): Promise<Category> {
    return await this.categoryService.create(category);
  }

  /**
   * Update category
   * @method updateCategory
   * @param {string} id
   * @param {Category} category
   * @returns {Promise<Category>}
   * @memberof CategoryController
   * @example
   * PUT /categories/:id
   * @example
   * curl -X PUT http://localhost:3000/categories/1
   * @Body
   * {
   * "name": "Category 1",
   * "description": "Category 1 description"
   * }
   */
  public async updateCategory(
    id: string,
    category: Category
  ): Promise<Category> {
    return await this.categoryService.update(id, category);
  }

  /**
   * Delete category
   * @method deleteCategory
   * @param {string} id
   * @returns {Promise<Category>}
   * @memberof CategoryController
   * @example
   * DELETE /categories/:id
   * @example
   * curl -X DELETE http://localhost:3000/categories/1
   * @Body
   * {
   * "name": "Category 1",
   * "description": "Category 1 description"
   * }
   */
  public async deleteCategory(id: string): Promise<Category> {
    return await this.categoryService.delete(id);
  }
}

