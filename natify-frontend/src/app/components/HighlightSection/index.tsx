import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MusicsService } from '../../services/music-service';
import { IMusic } from '../../@libs/types';

function HighLightSection() {

    const params= useParams();

    const [music, setMusics] = useState<IMusic>({} as IMusic);

    useEffect(()=>{

        const musicId = (params.id) ? params.id: "4b873811-6c0a-4b2e-a196-9b0b68ac631d"

        if(params.id){
            MusicsService.getMusicsById(musicId)
            .then(result => {
                if(result) setMusics(result);
            })
            .catch(error => {
                console.log('PAU:', error)
            })
        }
    },[params]);

    return(
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={`assets/${music.poster}`} />
                    <Stack
                        sx={{
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                        }}>
                        <Typography
                            variant="h4"
                        >{music.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span 
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.5rem',
                                }}>
                                {music.ageRating}
                            </span>

                            {music.genres && music.genres.map(genre => (genre.name)).join(', ')}

                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    paddingTop: '1rem',
                                    marginBottom: '0.5rem',
                                }}
                                >
                                Descrição
                            </Typography>
                            <Typography
                                variant="body2"
                            >
                                {music.description}
                            </Typography>
                            <Stack
                                direction="row"
                                gap={1}
                                sx={{
                                    paddingY: '1rem',
                                }}
                            >
                                <Button 
                                    variant='outlined'
                                >
                                    Favoritar
                                </Button>
                                <Button
                                    variant='contained'
                                >
                                    Detalhes
                                </Button>
                            </Stack>
                            
                    </Stack>
                    
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;