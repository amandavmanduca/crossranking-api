import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Field } from '@nestjs/graphql';
import { UpdateAthleteInput } from 'src/athletes/dto/update-athlete.input';
import { UpdateWorkoutInput } from 'src/workouts/dto/update-workout.input';
import { Result } from '../entities/result.entity';

@InputType('ResultInput')
export class CreateResultInput {
  @Field()
  result: number;

  @Field({nullable: true})
  rank: number;

  @FilterableField(() => UpdateWorkoutInput, {nullable: true})
  workout?: UpdateWorkoutInput;

  @FilterableField(() => UpdateAthleteInput, {nullable: true})
  athlete?: UpdateAthleteInput;

}
