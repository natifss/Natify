import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar sx={{
      zIndex: "tooltip"
    }}>
      <Toolbar>
        <Typography 
          variant="h6"
        >
          Natify - Painel Administrativo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;