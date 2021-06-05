import { Module } from '@nestjs/common';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Admin } from './entities/admin.entity';
import { AdminDTO } from './dto/admin.dto';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Admin])],
      services: [
        AdminsService,
      ],
      resolvers: [
        {
          EntityClass: Admin,
          DTOClass: AdminDTO,
          CreateDTOClass: CreateAdminInput,
          UpdateDTOClass: UpdateAdminInput,
          enableSubscriptions: true,
          enableAggregate: true,
          ServiceClass: AdminsService,
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
  providers: [AdminsService, AdminsResolver],
  exports: [AdminsService],
})
export class AdminsModule {}
