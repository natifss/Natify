import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Music } from "./music-entity";
import { MusicService } from "./music-service";
import { MusicController } from "./music-controller";
import { Category } from "src/categories/category-entity";
import { Genre } from "src/genres/genre-entity";


@Module({
    imports: [TypeOrmModule.forFeature([Category, Music, Genre])],
    providers: [MusicService],
    controllers: [MusicController]
})
export class MusicModule {}