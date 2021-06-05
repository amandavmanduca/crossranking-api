import { Connection, FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Athlete } from 'src/athletes/entities/athlete.entity';
import { CompetitionRank } from 'src/competition-ranks/entities/competition-rank.entity';
import { Competition } from 'src/competitions/entities/competition.entity';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@FilterableRelation('athletes', () => [Athlete], {nullable: true})
@FilterableRelation('competitionRanks', () => [CompetitionRank], {nullable: true})
@FilterableRelation('workouts', () => [Workout], {nullable: true})
@FilterableRelation('competitions', () => [Competition], {nullable: true})
@ObjectType()
export class Category {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  @FilterableField({nullable: true})
  name: string;

  @OneToMany(() => Athlete, athlete => athlete.category, {nullable: true})
  athletes: Athlete[];

  @OneToMany(() => Workout, workout => workout.category, {nullable: true})
  workouts: Workout[];

  @ManyToMany(() => Competition, competition => competition.categories, {nullable: true})
  competitions: Competition[];

  @OneToMany(() => CompetitionRank, competitionRank => competitionRank.category, {nullable: true})
  competitionRanks: CompetitionRank[];
}
