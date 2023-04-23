/**
 * Category Service
 * @class CategoryService
 * @implements {Service}
 */

import { Category } from "models/category.model";
import { Service } from "./Service.class";

export class CategoryService implements Service<Category> {
  constructor() { }

/**
 * Get all categories
 * @method getAll
 * @returns {Promise<Category[]>}
 * @memberof CategoryService
 */
  public async getAll(): Promise<Category[]> {
    // return await Category.findAll();
    return [
      {
        id: "1",
        name: "Category 1",
        description: "Category 1 description",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  }

/**
 * Get category by id
 * @method getOne
 * @param {string} id
 * @returns {Promise<Category>}
 * @memberof CategoryService
 */
  public async getOne(id: string): Promise<Category> {
    // return await Category.findByPk(id);
    return {
      id: "1",
      name: "Category 1",
      description: "Category 1 description",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

/**
 * Create category
 * @method create
 * @param {Category} category
 * @returns {Promise<Category>}
 * @memberof CategoryService
 */
  public async create(category: Category): Promise<Category> {
    // return await Category.create(category);
    return {
      id: "1",
      name: "Category 1",
      description: "Category 1 description",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

/**
 * Update category
 * @method update
 * @param {string} id
 * @param {Category} category
 * @returns {Promise<Category>}
 * @memberof CategoryService
 */
  public async update(id: string, category: Category): Promise<Category> {
    // return await Category.update(category, { where: { id } });
    return {
      id: "1",
      name: "Category 1",
      description: "Category 1 description",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

/**
 * Delete category
 * @method delete
 * @param {string} id
 * @returns {Promise<Category>}
 * @memberof CategoryService
 */
  public async delete(id: string): Promise<Category> {
    // return await Category.destroy({ where: { id } });
    return {
      id: "1",
      name: "Category 1",
      description: "Category 1 description",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }
}
