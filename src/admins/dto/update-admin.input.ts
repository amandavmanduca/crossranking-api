import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAdminInput } from './create-admin.input';

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field({nullable: true})
  id: string;
}

