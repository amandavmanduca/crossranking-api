import { Field, ObjectType } from '@nestjs/graphql';
import { AdminDTO } from 'src/admins/dto/admin.dto';
import { Admin } from 'src/admins/entities/admin.entity';


@ObjectType()
export class AuthType {
  @Field(() => AdminDTO)
  admin: Admin;

  @Field()
  token: string;
}

@ObjectType()
export class TokenValidType {
  @Field()
  valid: boolean;
}
