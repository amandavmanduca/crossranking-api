import { Admin } from "src/admins/entities/admin.entity";
import {MigrationInterface, QueryRunner} from "typeorm";

const admins = [
    { name: 'Super Administrador' },
    { name: 'Admin CrossRanking' },
  ];

export class SeedAdmins1621812919372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all(
            admins.map(async user => {
              const AdminRepo = queryRunner.connection.getRepository(Admin);
              const admin = AdminRepo.create({
                name: user.name,
                email: `${user.name.toLowerCase().replace(' ', '.')}@crossranking.com`,
                password: user.name.toLowerCase().replace(' ', '.'),
              });
              await AdminRepo.save(admin);
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const AdminRepo = queryRunner.connection.getRepository(Admin);
        await AdminRepo.delete({ email: 'super.administrador@crossranking.com' });
        await AdminRepo.delete({ email: 'admin.crossranking@crossranking.com' });
    }

}
