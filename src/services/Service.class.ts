export interface Service<T> {
  getAll(): Promise<T[]>;
  getOne(id: string | number): Promise<T>;
  create(category: T): Promise<T>;
  update(id: string | number, category: T): Promise<T>;
  delete(id: string | number): Promise<T>;
}