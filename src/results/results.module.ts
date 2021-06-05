import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreateResultInput } from './dto/create-result.input';
import { UpdateResultInput } from './dto/update-result.input';
import { Result } from './entities/result.entity';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Result])],
      resolvers: [
        {
          EntityClass: Result,
          DTOClass: Result,
          CreateDTOClass: CreateResultInput,
          UpdateDTOClass: UpdateResultInput,
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
export class ResultsModule {}
