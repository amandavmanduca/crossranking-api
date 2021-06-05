import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateAdminInput } from './dto/create-admin.input';

@Injectable()
export class AdminsService  extends TypeOrmQueryService<Admin> {
    constructor(
        @InjectRepository(Admin)
        public adminRepository: Repository<Admin>
    ) {
        super(adminRepository, { useSoftDelete: true })
    }

    async findOne(input: FindOneOptions<Admin>): Promise<Admin> {
        const data = await this.adminRepository.findOne({ ...input });
        if (!data) {
          throw new NotFoundException('Admin não encontrado.');
        }
        return data;
    }

    async createUserByAdmin(data: CreateAdminInput): Promise<Admin> {
        const admin: Admin = this.adminRepository.create({
          ...data,
        });
        const userFound = await this.adminRepository.findOne({
          where: [{ email: data.email }],
        });
        if (userFound) {
          throw new UnauthorizedException('Usuário já existente.');
        }
        return this.adminRepository.save(admin);
      }
}