import { Container, Icon, Stack, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Instagram, Facebook, YouTube} from '@mui/icons-material'

function  Footer() {
    
    return (
        <footer>
            <Container
                sx={{
                    Padding: '3rem'
                }}
            >

                <Typography
                    variant="overline"  
                    textAlign="center"
                    component="p"     
                >
                    Natify - Todos os deireitos reservados
                            

                 </Typography>
                 <Stack
                    direction="row"
                    justifyContent="center"
                    
                 >

                    <IconButton>
                        <Instagram />
                    </IconButton>

                    <IconButton>
                        <Facebook />
                    </IconButton>               

                    <IconButton>            
                        <YouTube />
                    </IconButton>


                 </Stack>

            </Container>
        </footer>
    )   
}
export default Footer