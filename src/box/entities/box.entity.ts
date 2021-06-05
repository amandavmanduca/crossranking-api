import { Connection, FilterableField, FilterableRelation, PagingStrategies } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Athlete } from '../../athletes/entities/athlete.entity';

@Entity()
@FilterableRelation('athletes', () => [Athlete], {nullable: true, pagingStrategy: PagingStrategies.NONE})
@ObjectType()
export class Box {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  @FilterableField({nullable: true})
  name: string;

  @Column({nullable: true})
  @FilterableField({nullable: true})
  city: string;

  @Column({nullable: true})
  @Field({nullable: true})
  logo: string;

  
  @OneToMany(() => Athlete, athlete => athlete.box, {nullable: true})
  athletes: Athlete[];
}
