import { BeforeCreateOne, CreateOneInputType } from '@nestjs-query/query-graphql';
import { InputType, Int, Field } from '@nestjs/graphql';
import { UpdateBoxInput } from 'src/box/dto/update-box.input';
import { UpdateCategoryInput } from 'src/category/dto/update-category.input';

@InputType('AthleteInput')
// @BeforeCreateOne((input: CreateOneInputType<CreateAthleteInput>) => {
//   console.log(input);
//   return input;
// })
export class CreateAthleteInput {
  @Field({nullable: true})
  firstname: string;

  @Field({nullable: true})
  lastname: string;

  @Field({nullable: true})
  birth: string;

  @Field({nullable: true})
  sex: string;

  @Field({nullable: true})
  cpf: string;

  @Field({nullable: true})
  email: string;

  @Field(() => UpdateBoxInput, {nullable: true})
  box?: UpdateBoxInput;

  @Field(() => UpdateCategoryInput, {nullable: true})
  category?: UpdateCategoryInput;
}
