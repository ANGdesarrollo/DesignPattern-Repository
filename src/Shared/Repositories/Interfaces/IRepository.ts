export interface IRepository<T> {
    list(): Promise<T[]>
    save(entity: T): Promise<T>,
    getOneById(id: string): Promise<T | null>,
    updateOne(entity: T): Promise<T>,
    deleteOne(id: string): Promise<T>
}