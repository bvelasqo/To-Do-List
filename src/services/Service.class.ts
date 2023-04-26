export interface Service<T> {
	getAll(): Promise<T[] | string>
	getOne(id: string | number, sk?: string): Promise<T>
	create(category: T): Promise<T>
	update(id: string | number, category: T, sk?: string): Promise<T>
	delete(id: string | number, sk?: string): Promise<T>
}
