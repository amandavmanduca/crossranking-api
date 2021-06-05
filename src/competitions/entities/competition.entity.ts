import { Connection, FilterableField, FilterableRelation, PagingStrategies } from '@nestjs-query/query-graphql';
import { ObjectType, Field,  ID } from '@nestjs/graphql';
import { Athlete } from 'src/athletes/entities/athlete.entity';
import { Category } from 'src/category/entities/category.entity';
import { CompetitionRank } from 'src/competition-ranks/entities/competition-rank.entity';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@FilterableRelation('workouts', () => [Workout], {nullable: true})
@FilterableRelation('athletes', () => [Athlete], {nullable: true, pagingStrategy: PagingStrategies.NONE})
@FilterableRelation('categories', () => [Category], {nullable: true})
@FilterableRelation('competitionRanks', () => [CompetitionRank], {nullable: true})
@ObjectType()
export class Competition {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @FilterableField()
  name: string;

  @Column()
  @FilterableField({ nullable: true })
  season: number;

  @Column({ nullable: true })
  @FilterableField()
  date: string;

  @Column({ nullable: true })
  @FilterableField()
  place: string;

  @Column({ nullable: true })
  @FilterableField({ nullable: true })
  weight: number;

  @OneToMany(() => Workout, workout => workout.competition, { nullable: true })
  workouts: Workout[];

  @JoinTable()
  @ManyToMany(() => Athlete, athlete => athlete.competitions, { nullable: true })
  athletes: Athlete[];

  @JoinTable()
  @ManyToMany(() => Category, category => category.competitions, { nullable: true })
  categories: Category[];

  @OneToMany(() => CompetitionRank, competitionRank => competitionRank.competition, { nullable: true, onDelete: 'CASCADE' })
  competitionRanks: CompetitionRank[];


}
