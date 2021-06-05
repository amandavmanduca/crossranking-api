
import { hashPasswordTransform } from 'src/common/crypto';
import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FilterableField } from '@nestjs-query/query-graphql';


@Entity()
@ObjectType()
export class Admin {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  @FilterableField({nullable: true})
  name: string;

  @Column({ unique: true, nullable: true })
  @FilterableField({nullable: true})
  email: string;

  @Column({
    transformer: hashPasswordTransform
  })
  @HideField()
  password: string;
}
