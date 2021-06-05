
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';
import { CreateCompetitionInput } from './create-competition.input';

@InputType()
export class UpdateCompetitionInput extends PartialType(CreateCompetitionInput) {
  @FilterableField({nullable: true})
  id: string;
}
