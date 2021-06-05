import { FilterableField, FilterableRelation, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Athlete } from 'src/athletes/entities/athlete.entity';
import { Category } from 'src/category/entities/category.entity';
import { Competition } from 'src/competitions/entities/competition.entity';
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(["competition", "athlete"], { unique: true })
@FilterableRelation('athlete', () => Athlete, {nullable: true})
@FilterableRelation('category', () => Category, {nullable: true})
@FilterableRelation('competition', () => Competition, {nullable: true})
@ObjectType()
export class CompetitionRank {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  @FilterableField({nullable: true})
  rank: number;

  @Column({nullable: true})
  @FilterableField({nullable: true})
  points: number;

  @ManyToOne(() => Category, category => category.competitionRanks, { nullable: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Competition, competition => competition.competitionRanks, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  competition: Competition;

  @ManyToOne(() => Athlete, athlete => athlete.competitionRanks, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  athlete: Athlete;


}
