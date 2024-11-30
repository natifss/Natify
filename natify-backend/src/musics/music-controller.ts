import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Category } from "src/categories/category-entity";
import { Music } from "src/musics/music-entity";
import { MusicService } from "src/musics/music-service";

@Controller('musics')
export class MusicController {

    constructor(
        private readonly service: MusicService,
    ){}

    @Get()
    findAll(@Query ('categoryId') categoryId?: string): Promise <Music[]> {
        if(categoryId){
            return this.service.findByCategory({
                id: Number(categoryId),
            } as Category);
        }
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Music> {
        const found = await this.service.findById(id);

        if(!found){
            throw new HttpException('Music not found', HttpStatus.NOT_FOUND);
        }

        return found
    }

    @Post()
    create(@Body() category: Music): Promise<Music> {
        return this.service.save(category);
    }

    @Put(':id')
    async update(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() music: Music,): 
        Promise<Music> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Music not found', HttpStatus.NOT_FOUND);
        }

        music.id = found.id;

        return this.service.save(music);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {

        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Music not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);
    }

}