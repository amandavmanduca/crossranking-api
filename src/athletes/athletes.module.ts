import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { Box } from 'src/box/entities/box.entity';
import { Category } from 'src/category/entities/category.entity';
import { CreateAthleteInput } from './dto/create-athlete.input';
import { UpdateAthleteInput } from './dto/update-athlete.input';
import { Athlete } from './entities/athlete.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Athlete])],
      resolvers: [
        {
          EntityClass: Athlete,
          DTOClass: Athlete,
          CreateDTOClass: CreateAthleteInput,
          UpdateDTOClass: UpdateAthleteInput,
          enableSubscriptions: true,
          enableAggregate: true,
          pagingStrategy: PagingStrategies.NONE,
          create: {
            decorators: [UseGuards(GqlAuthGuard)]
          },
          delete: {
            decorators: [UseGuards(GqlAuthGuard)]
          },
          update: {
            decorators: [UseGuards(GqlAuthGuard)]
          }
        }
      ]
    })
  ],
  providers: []
})
export class AthletesModule {}
