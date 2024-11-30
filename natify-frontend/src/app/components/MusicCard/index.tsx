import { Paper } from '@mui/material'
import { IMusic } from '../../@libs/types';

type MusicCardProps = {
   music: IMusic;
}

function MusicCard({
   music
}: MusicCardProps) {
    
    return (
       <Paper
        component="a"
        elevation={0}
        href={music.id}
        sx={{

            minWidth:'10rem'
        }}> 
        <img src={ `assets/${music.poster}` }
             style={{
                width:'100%'
             }}
        >
        </img>
       </Paper>
    )   
}
export default MusicCard