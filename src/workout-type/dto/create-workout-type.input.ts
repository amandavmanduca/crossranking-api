import { InputType, Field } from '@nestjs/graphql';

@InputType('WorkoutTypeInput')
export class CreateWorkoutTypeInput {
  @Field()
  name: string;
}
