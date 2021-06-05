import { InputType, Int, Field } from '@nestjs/graphql';
// import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType('AdminInput')
export class CreateAdminInput {
  
  // @IsString()
  // @IsNotEmpty({ message: 'O campo Nome deve estar preenchido' })
  // @IsOptional()
  @Field({ nullable: true})
  name: string;

  
  // @IsEmail({}, { message: 'E-mail fora de padrão' })
  // @IsNotEmpty({ message: 'O campo E-mail deve estar preenchido' })
  // @IsOptional()
  @Field({ nullable: true})
  email: string;

  
  // @IsString()
  // @IsNotEmpty({ message: 'O campo Senha deve estar preenchido' })
  // @IsOptional()
  @Field({ nullable: true})
  password: string;
}
