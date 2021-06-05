import { Connection, FilterableField, FilterableRelation, PagingStrategies, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Box } from 'src/box/entities/box.entity';
import { Category } from 'src/category/entities/category.entity';
import { CompetitionRank } from 'src/competition-ranks/entities/competition-rank.entity';
import { Competition } from 'src/competitions/entities/competition.entity';
import { Result } from 'src/results/entities/result.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@FilterableRelation('category', () => Category, {nullable: true})
@Relation('box', () => Box, {nullable: true, pagingStrategy: PagingStrategies.NONE})
@FilterableRelation('results', () => [Result], {nullable: true})
@FilterableRelation('competitions', () => [Competition], {nullable: true, pagingStrategy: PagingStrategies.NONE})
@FilterableRelation('competitionRanks', () => [CompetitionRank], {nullable: true, pagingStrategy: PagingStrategies.NONE})
@ObjectType()
export class Athlete {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @FilterableField()
  firstname: string;

  @Column()
  @FilterableField()
  lastname: string;

  @Column({ nullable: true })
  @FilterableField()
  birth: string;

  @Column({ nullable: true })
  @FilterableField()
  sex: string;

  @Column({ nullable: true })
  @FilterableField()
  cpf: string;

  @Column({ nullable: true })
  @FilterableField()
  email: string;

  // @FilterableField()
  @ManyToOne(() => Category, category => category.athletes, { nullable: true, eager: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Box, box => box.athletes, { nullable: true, eager: true })
  @JoinColumn()
  box: Box;
  // join table em vez de join column
  // connection dos dois lados

  @OneToMany(() => Result, result => result.athlete, {nullable: true})
  results: Result[];

  @ManyToMany(() => Competition, competition => competition.athletes, {nullable: true })
  competitions: Competition[];

  @OneToMany(() => CompetitionRank, competitionRank => competitionRank.athlete, {nullable: true, onDelete: 'CASCADE'})
  competitionRanks: CompetitionRank[];
}