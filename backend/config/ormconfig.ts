import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
    host: 'db',
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'qwe123',
    database: 'board_db',
    entities: [
        'src/**/**.entity{.ts,.js}',
    ],
    migrations: [
        'src/migrations/*.ts',
    ],
    synchronize: false,
});

