import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoxInput {
  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  city: string;

  @Field({nullable: true})
  logo: string;
}
