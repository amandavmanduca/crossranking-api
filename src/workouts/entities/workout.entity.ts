import { Connection, FilterableField, FilterableRelation, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Competition } from 'src/competitions/entities/competition.entity';
import { Result } from 'src/results/entities/result.entity';
import { WorkoutType } from 'src/workout-type/entities/workout-type.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Type } from './workout-type.enum';

@Entity()
// @Relation('workoutType', () => WorkoutType, {nullable: true})
@Relation('category', () => Category, {nullable: true})
@Relation('workoutType', () => WorkoutType, {nullable: true})
@Relation('competition', () => Competition, {nullable: true})
@FilterableRelation('results', () => [Result], {nullable: true})
@ObjectType()
export class Workout {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  @FilterableField()
  name: string;

  @Column({ nullable: true })
  cap: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => WorkoutType, workoutType => workoutType.workouts, { nullable: true })
  @JoinColumn()
  workoutType: WorkoutType;

  @ManyToOne(() => Category, category => category.workouts, { nullable: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Competition, competition => competition.workouts, { nullable: true })
  @JoinColumn()
  competition: Competition;

  @OneToMany(() => Result, result => result.workout, { nullable: true })
  results: Result[];
  
}
