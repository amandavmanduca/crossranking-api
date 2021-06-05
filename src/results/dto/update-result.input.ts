import { CreateResultInput } from './create-result.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResultInput extends PartialType(CreateResultInput) {
  @Field({nullable: true})
  id: string;

  // @Field({nullable: true})
  // rank: number;
  
}
