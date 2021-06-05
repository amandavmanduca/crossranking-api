import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Competition } from 'src/competitions/entities/competition.entity';
import { FilterableRelation } from '@nestjs-query/query-graphql';

@InputType()
@FilterableRelation('competitions', () => [Competition])
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field({nullable: true})
  id: string;
}
