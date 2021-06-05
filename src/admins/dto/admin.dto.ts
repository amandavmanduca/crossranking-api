import {
    FilterableField,
    FilterableRelation,
    PagingStrategies,
  } from '@nestjs-query/query-graphql';
  import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';


@ObjectType('Admin')
export class AdminDTO {
    @Field(() => ID)
    id: string;
  
    @FilterableField({ nullable: true })
    name?: string;
  
  
    @FilterableField({ nullable: true })
    email?: string;
  
    @HideField()
    password?: string;
}