import {Box, Container, Stack, Typography}  from '@mui/material'
import MusicCard from "../MusicCard";
import { useEffect, useState } from 'react';
import { ICategory, IMusic } from '../../@libs/types';
import { MusicsService } from '../../services/music-service';

type SectionProps = {
    category: ICategory;
}

function Section({
    category
}: SectionProps) {
    
    const[musics, setMusics] = useState<IMusic[]>([]);

    useEffect(() =>{

        if (category.id){
        MusicsService.getByCategoryId(category.id)
        .then(result => {
            setMusics(result)
        });
    }
    }, []);
    
    
    return(
        <Box>
            <Container>
                <Typography
                variant ="h6"
                sx={{
                    fontWeight: 400,
                    paddingTop: '2rem'
                }}>
                    

                    { category.name } 
                </Typography>
                <Stack
                direction="row"
                gap={0.5}
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem'
                }}
                >
                    {musics.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))}

                </Stack>
            </Container>
        </Box>
    )
}

export default Section;