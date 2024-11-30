import { Module } from "@nestjs/common";
import { CategoryService } from "./category-services";
import { CategoryController } from "./category-controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category-entity";


@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule {}