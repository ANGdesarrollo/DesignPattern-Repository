import { Model } from 'mongoose';
import { IRepository, IMongooseDocument } from './Interfaces';

export abstract class MongooseRepository<T extends IMongooseDocument> implements IRepository<T> {
    protected repository: Model<T>

    constructor(Model: Model<T>){
        this.repository = Model;
    };

    async list(): Promise<T[]> {
        return this.repository.find().exec();
    };

    async save(entity: T): Promise<T> {
        return await this.repository.create(entity);
    };

    async getOne(id: string): Promise<T> {
        const entity = await this.repository.findOne({_id: id});

        if(!entity) throw new Error();

        return entity;
    };

    async updateOne(entity: T): Promise<T> {
        const filter = { _id: entity._id};
        const update = {...entity};
        const data = await this.repository.findOneAndUpdate(filter, update, { new: true });
        
        if(!data) throw new Error();

        return data;
    };

    async deleteOne(id: string): Promise<T> {
        const entity = await this.repository.findByIdAndDelete({_id: id});

        if(!entity) throw new Error();

        return entity;
    };
};