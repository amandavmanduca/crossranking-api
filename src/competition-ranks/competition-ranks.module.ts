import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CompetitionRank } from './entities/competition-rank.entity';
import { CreateCompetitionRankInput } from './dto/create-competition-rank.input';
import { UpdateCompetitionRankInput } from './dto/update-competition-rank.input';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CompetitionRank])],
      resolvers: [
        {
          EntityClass: CompetitionRank,
          DTOClass: CompetitionRank,
          CreateDTOClass: CreateCompetitionRankInput,
          UpdateDTOClass: UpdateCompetitionRankInput,
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
export class CompetitionRanksModule {}
