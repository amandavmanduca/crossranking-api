module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/**/migrations/*.js'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    synchronize: process.env.DB_SYNC == 'true',
    migrationsRun: true,
  };
  