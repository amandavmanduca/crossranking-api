import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('AttachCategoryInput')
export class AttachCategoryInput {
  @Field(() => ID)
  id: string;
}
