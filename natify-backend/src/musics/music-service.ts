import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/category-entity";
import { Music } from "src/musics/music-entity";
import { Repository } from "typeorm";

@Injectable()
export class MusicService{

    constructor(
        @InjectRepository(Music)
        private repository: Repository<Music>
    ){}

    findAll(): Promise<Music[]> {
        return this.repository.find();
    }

    findById(id: string): Promise <Music> {
        return this.repository.findOneBy({ id: id })
    }

    findByCategory(category: Category): Promise <Music[]> {
        return this.repository.find({
            where: {
                categories: {
                    id: category.id,
                }
            }
        })
    }

    save(music: Music): Promise<Music>{
        return this.repository.save(music);
    }

    async remove(id: string): Promise<void>{
        await this.repository.delete(id);
    }

}