import { IRepository } from "./Interfaces";
import {EntityManager, EntityRepository, MikroORM} from "@mikro-orm/core";

export abstract class MikroORMRepository<T> implements IRepository<T> {
    protected entityManager: EntityManager
    protected repository: EntityRepository<T>

    constructor(orm: MikroORM) {}
}
