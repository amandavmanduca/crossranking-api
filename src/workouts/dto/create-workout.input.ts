import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Int, Field } from '@nestjs/graphql';
import { UpdateCategoryInput } from 'src/category/dto/update-category.input';
import { UpdateCompetitionInput } from 'src/competitions/dto/update-competition.input';
import { UpdateWorkoutTypeInput } from 'src/workout-type/dto/update-workout-type.input';

@InputType('WorkoutInput')
export class CreateWorkoutInput {
  @FilterableField({nullable: true})
  name: string;

  @FilterableField({nullable: true})
  cap: number;

  // @FilterableField({nullable: true})
  // type?: Type;

  @FilterableField(() => UpdateWorkoutTypeInput, {nullable: true})
  workoutType?: UpdateWorkoutTypeInput;

  @FilterableField(() => UpdateCategoryInput, {nullable: true})
  category?: UpdateCategoryInput;
  
  @FilterableField(() => UpdateCompetitionInput, {nullable: true})
  competition?: UpdateCompetitionInput;

}
