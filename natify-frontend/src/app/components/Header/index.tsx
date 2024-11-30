
import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from '@mui/material'


 const MenuButton = styled(Button)({

    color: '#fff',
    fontWeight: '400',
    })

function Header() {

    return (
        <AppBar> 

            <Container>

                <Toolbar>

                    <Typography variant ="h6">
                        Natify

                    </Typography>
                    <Box
                         sx={{ 
                            paddingLeft: '1rem',
                            
                         }}
                    >
                        
                        <MenuButton variant="text" disabled>Menu</MenuButton >
                        <MenuButton variant="text">Explore</MenuButton>

                    
                    </Box>   

                </Toolbar>
            </Container>
        </AppBar>
        
    )
}

export default Header