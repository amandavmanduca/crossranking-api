import { Connection, FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@FilterableRelation('workouts', () => [Workout], {nullable: true})
@ObjectType()
export class WorkoutType {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @FilterableField()
  name: string;

  @OneToMany(() => Workout, workout => workout.workoutType)
  workouts: Workout[];

}
