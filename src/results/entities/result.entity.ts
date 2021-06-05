import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Athlete } from 'src/athletes/entities/athlete.entity';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Relation('workout', () => Workout, {nullable: true})
@Relation('athlete', () => Athlete, {nullable: true})
@ObjectType()
export class Result {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  @FilterableField()
  result: number;
  
  @Column({nullable: true})
  @FilterableField({nullable: true})
  rank: number;
  
  @ManyToOne(() => Workout, workout => workout.results)
  @JoinColumn()
  workout: Workout;
  
  @ManyToOne(() => Athlete, athlete => athlete.results)
  @JoinColumn()
  athlete: Athlete;
}
