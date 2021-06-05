import { Category } from "src/category/entities/category.entity";
import {MigrationInterface, QueryRunner} from "typeorm";

const categories = [
    { name: 'RX/M' },
    { name: 'RX/F' },
    { name: 'Amador/M' },
    { name: 'Amador/F' },
    { name: 'Scale/M' },
    { name: 'Scale/F' },
  ];
export class SeedCategories1621813839070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all(
            categories.map(async category => {
              const CategoryRepo = queryRunner.connection.getRepository(Category);
              const newCategory = CategoryRepo.create({
                name: category.name,
              });
              await CategoryRepo.save(newCategory);
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all(
            categories.map(async category => {
              const CategoryRepo = queryRunner.connection.getRepository(Category);
              CategoryRepo.delete({
                name: category.name,
              });
            }),
        );
    }

}
