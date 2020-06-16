import {
    EntityManager,
    getManager,
    getConnection,
    SelectQueryBuilder
  } from 'typeorm';
  import { logger } from '../utils';
  // import { DBConnectError } from '@/config/retcode';
  
  export class Service {
    protected manager: EntityManager;
    protected queryBuild: SelectQueryBuilder<any>;
    public constructor() {
      // 连接异常
      try {
        this.manager = getManager();
        this.queryBuild = getConnection().createQueryBuilder();
      } catch (err) {
        logger.error(err);
        // logger.errorInside(
        //   DBConnectError,
        //   err
        // );
      }
    }
  }