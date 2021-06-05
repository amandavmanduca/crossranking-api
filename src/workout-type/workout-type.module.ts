import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreateWorkoutTypeInput } from './dto/create-workout-type.input';
import { UpdateWorkoutTypeInput } from './dto/update-workout-type.input';
import { WorkoutType } from './entities/workout-type.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WorkoutType])],
      resolvers: [
        {
          EntityClass: WorkoutType,
          DTOClass: WorkoutType,
          CreateDTOClass: CreateWorkoutTypeInput,
          UpdateDTOClass: UpdateWorkoutTypeInput,
          enableAggregate: true,
          pagingStrategy: PagingStrategies.NONE,
          create: {
            decorators: [UseGuards(GqlAuthGuard)]
          },
          delete: {
            decorators: [UseGuards(GqlAuthGuard)]
          },
          update: {
            decorators: [UseGuards(GqlAuthGuard)]
          }
        }
      ]
    })
  ],
  providers: []
})
export class WorkoutTypeModule {}
