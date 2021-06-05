import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateBoxInput } from './create-box.input';

@InputType()
export class UpdateBoxInput extends PartialType(CreateBoxInput) {
  @FilterableField({nullable: true})
  id: string;

  // @Field({nullable: true})
  // name: string;

  // @Field({nullable: true})
  // city: string;

  // @Field({nullable: true})
  // logo: string;
}