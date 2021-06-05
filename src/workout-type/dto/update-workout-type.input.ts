import { CreateWorkoutTypeInput } from './create-workout-type.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkoutTypeInput extends PartialType(CreateWorkoutTypeInput) {
  @Field()
  id: string;
}
