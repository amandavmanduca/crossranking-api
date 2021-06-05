
import {
  FilterableField,
  FilterableRelation,
  Relation,
} from '@nestjs-query/query-graphql';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { Competition } from 'src/competitions/entities/competition.entity';

@ObjectType('Category')
// @InputType('Category')
export class CategoryDTO {
  @FilterableField(() => ID)
  id?: string;

  @FilterableField()
  name?: string;
}
