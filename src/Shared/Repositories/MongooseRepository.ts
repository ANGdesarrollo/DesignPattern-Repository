import {Document, FilterQuery, Model } from 'mongoose';
import { IRepository } from './Interfaces';
import { IBaseDomain } from '../Domain/Entities/IBaseDomain';

export abstract class MongooseRepository<T extends IBaseDomain, D extends Document & T> implements IRepository<T> {
    protected repository: Model<D>

    protected constructor(Model: Model<D>){
        this.repository = Model;
    };

    async list(): Promise<T[]> {
        return this.repository.find().exec();
    };

    async save(entity: T): Promise<T> {
        return await this.repository.create(entity);
    };

    async getOneById(id: string): Promise<T> {
        const entity = await this.repository.findOne({_id: id});

        if(!entity) throw new Error();

        return entity;
    };

    async getOne(condition: Record<string, any>): Promise<T | null>
    {
        const entity = await this.repository.findOne(condition as FilterQuery<T>).exec();
        return entity;
    }

    async updateOne(entity: T): Promise<T> {
        const filter = { _id: entity.getId()};
        const update = { $set: entity } ;
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
