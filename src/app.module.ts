import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoxModule } from './box/box.module';
import { AthletesModule } from './athletes/athletes.module';
import { CompetitionsModule } from './competitions/competitions.module';
import { CategoryModule } from './category/category.module';
import { WorkoutTypeModule } from './workout-type/workout-type.module';
import { ResultsModule } from './results/results.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CompetitionRanksModule } from './competition-ranks/competition-ranks.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      port: 5432,
      host: process.env.DB_HOST,
      ssl: {
        rejectUnauthorized: false
      },
    }),
    GraphQLModule.forRoot({
      // set to true to automatically generate schema
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),
    BoxModule,
    AthletesModule,
    CompetitionsModule,
    CategoryModule,
    WorkoutTypeModule,
    ResultsModule,
    WorkoutsModule,
    AdminsModule,
    AuthModule,
    CompetitionRanksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}