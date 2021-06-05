import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Workout } from './entities/workout.entity';
import { CreateWorkoutInput } from './dto/create-workout.input';
import { UpdateWorkoutInput } from './dto/update-workout.input';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Workout])],
      resolvers: [
        {
          EntityClass: Workout,
          DTOClass: Workout,
          CreateDTOClass: CreateWorkoutInput,
          UpdateDTOClass: UpdateWorkoutInput,
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
export class WorkoutsModule {}
