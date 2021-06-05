import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreateCompetitionInput } from './dto/create-competition.input';
import { UpdateCompetitionInput } from './dto/update-competition.input';
import { Competition } from './entities/competition.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Competition])],
      resolvers: [
        {
          EntityClass: Competition,
          DTOClass: Competition,
          CreateDTOClass: CreateCompetitionInput,
          UpdateDTOClass: UpdateCompetitionInput,
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
export class CompetitionsModule {}
