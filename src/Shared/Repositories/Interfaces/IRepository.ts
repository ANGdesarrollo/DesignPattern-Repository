export interface IRepository<T> {
    list(): Promise<T[]>
    save(entity: T): Promise<T>,
    getOneById(id: string): Promise<T>,
    updateOne(entity: T): Promise<T>,
    deleteOne(id: string): Promise<T>
}