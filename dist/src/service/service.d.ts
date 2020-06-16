import { EntityManager, SelectQueryBuilder } from 'typeorm';
export declare class Service {
    protected manager: EntityManager;
    protected queryBuild: SelectQueryBuilder<any>;
    constructor();
}
