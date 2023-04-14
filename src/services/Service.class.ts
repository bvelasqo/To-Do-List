export interface Service<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
  create(category: T): Promise<T>;
  update(id: string, category: T): Promise<T>;
  delete(id: string): Promise<T>;
}