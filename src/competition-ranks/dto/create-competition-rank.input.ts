import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Int, Field } from '@nestjs/graphql';
import { UpdateAthleteInput } from 'src/athletes/dto/update-athlete.input';
import { UpdateCategoryInput } from 'src/category/dto/update-category.input';
import { UpdateCompetitionInput } from 'src/competitions/dto/update-competition.input';

@InputType('CompetitionRankInput')
export class CreateCompetitionRankInput {
  @Field()
  points: number;

  @Field({nullable: true})
  rank: number;

  @FilterableField(() => UpdateCompetitionInput, {nullable: true})
  competition?: UpdateCompetitionInput;

  @FilterableField(() => UpdateCategoryInput, {nullable: true})
  category?: UpdateCategoryInput;

  @FilterableField(() => UpdateAthleteInput, {nullable: true})
  athlete?: UpdateAthleteInput;

}
