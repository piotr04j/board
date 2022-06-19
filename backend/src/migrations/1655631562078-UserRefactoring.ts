import { MigrationInterface, QueryRunner } from "typeorm"

export class UserRefactoring1655631562078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "Email" varchar(255)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "Email"`)
    }

}
