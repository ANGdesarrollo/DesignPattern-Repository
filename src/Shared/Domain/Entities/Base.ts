import { v4 as uuidv4 } from 'uuid';
import { IBaseDomain } from './IBaseDomain';

export abstract class Base implements IBaseDomain
{
    _id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this._id = uuidv4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    getId(): string {
        return this._id;
    }
}