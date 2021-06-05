import { CreateAthleteInput } from './create-athlete.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class UpdateAthleteInput extends PartialType(CreateAthleteInput) {
  @FilterableField({nullable: true})
  id: string;
  // @Field({nullable: true})
  // firstname: string;

  // @Field({nullable: true})
  // lastname: string;

  // @Field({nullable: true})
  // birth: string;

  // @Field({nullable: true})
  // sex: string;

  // @Field({nullable: true})
  // cpf: string;

  // @Field({nullable: true})
  // email: string;

  // @Field({nullable: true})
  // box_id: number;

  // @Field({nullable: true})
  // category_id: number;
}
