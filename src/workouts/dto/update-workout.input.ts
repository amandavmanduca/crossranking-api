import { CreateWorkoutInput } from './create-workout.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class UpdateWorkoutInput extends PartialType(CreateWorkoutInput) {
  @FilterableField({nullable: true})
  id: string;
}
