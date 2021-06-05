import { CreateCompetitionRankInput } from './create-competition-rank.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class UpdateCompetitionRankInput extends PartialType(CreateCompetitionRankInput) {
  @FilterableField({nullable: true})
  id: string;
}
