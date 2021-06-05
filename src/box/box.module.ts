import { SortDirection } from '@nestjs-query/core';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { Athlete } from 'src/athletes/entities/athlete.entity';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CreateBoxInput } from './dto/create-box.input';
import { UpdateBoxInput } from './dto/update-box.input';
import { Box } from './entities/box.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Box, Athlete])],
      resolvers: [
        {
          EntityClass: Box,
          DTOClass: Box,
          CreateDTOClass: CreateBoxInput,
          UpdateDTOClass: UpdateBoxInput,
          enableSubscriptions: true,
          enableAggregate: true,
          pagingStrategy: PagingStrategies.NONE,
          enableTotalCount: true,
          read: { defaultSort: [{ field: 'name', direction: SortDirection.ASC }] },
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
export class BoxModule {}
