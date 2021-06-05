import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { InputType, Int, Field } from '@nestjs/graphql';
import { AttachCategoryInput } from 'src/category/dto/attatch-category.dto';
import { CategoryDTO } from 'src/category/dto/category.dto';


@InputType('CompetitionInput')
export class CreateCompetitionInput {
  @Field({ nullable: true })
  name: string;
  
  @Field({ nullable: true })
  season: number;

  
  @Field({ nullable: true })
  date: string;

  
  @Field({ nullable: true })
  place: string;

  
  @Field({ nullable: true })
  weight: string;


  @Field(() => [AttachCategoryInput], { nullable: true })
  categories?: CategoryDTO[];
}
