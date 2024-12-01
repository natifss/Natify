import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText
          primary="Cadastros" 
        />
        <ListItemButton
          href="/genres"
        >
          <ListItemText primary="Gêneros" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/categories"
        >
          <ListItemText 
            primary="Categorias" 
          />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/musics"
        >
          <ListItemText primary="/Explore" />
        </ListItemButton>
        <Divider />
      </List>
    </aside>
  )
}

export default SideMenu;