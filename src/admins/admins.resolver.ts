import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AdminDTO } from './dto/admin.dto';
import { CreateAdminInput } from './dto/create-admin.input';
import { Admin } from './entities/admin.entity';
import { AdminsService } from './admins.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Resolver('Admin')
export class AdminsResolver {
    constructor(private adminsService: AdminsService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => AdminDTO)
    public async createUserByAdmin(
      @Args({ name: 'data', type: () => CreateAdminInput, nullable: true })
      data: CreateAdminInput,
    ): Promise<Admin> {
      return this.adminsService.createUserByAdmin(data);
    }
}