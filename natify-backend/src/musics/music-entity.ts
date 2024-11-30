import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "src/categories/category-entity";
import { Genre } from "src/genres/genre-entity";

@Entity('music')
export class Music {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    description: string;

    @Column({ name: 'age-rating', length: 2, nullable: false })
    ageRating: string;

    @Column({ nullable: false })
    poster: string;

    @ManyToMany(() => Category, { eager: true })
    @JoinTable({
        name: 'music_category'
    })
    categories: Category[];

    @ManyToMany(() => Genre, { eager: true })
    @JoinTable({
        name: 'music_genre'
    })
    genre: Genre[];
}