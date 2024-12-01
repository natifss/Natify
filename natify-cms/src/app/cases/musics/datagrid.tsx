import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Chip, Paper, Stack } from "@mui/material";
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { IGenre, IMusic } from "../../../@libs/types";
import ActionsMenu from "../../components/ui/action-menu";
import { MusicService } from "../../../services/music.service";

//Definições das colunas
const columns: GridColDef[] = [
  { 
    field: 'title', 
    headerName: 'Título da Música', 
    resizable: false, 
    flex: 1 
  },
  { 
    field: 'genres', 
    headerName: 'Gêneros', 
    align: 'left',
    resizable: false, 
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const genres: IGenre[] = params.row.genres || [];

      return (
        <Stack
          direction="row"
          alignItems="center"
          gap="0.5rem"
          height="100%"
        >
          {genres.length > 0 && genres.map(item => (
            <Chip key={item.id} label={item.name} />
          ))}
        </Stack>
      )
    }      
  },
  { 
    field: 'ageRating', 
    headerName: 'Classificação', 
    align: 'center',
    resizable: false, 
    width: 150
  },
  {
    field: 'actions',
    headerName: '', 
    resizable: false,    
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionsMenu
        itemId={params.row.id}
      />
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export function MusicDataGrid() {
  const location = useLocation();

  const [musics, setMusics] = useState<IMusic[]>([]);

  useEffect(() => {
    MusicService.getAll()
      .then(result => {
        setMusics(result.data)
      })
      .catch(error => toast.error(String(error)))
  }, [location]);

  return (
    <Paper
      sx={{ 
        height: '90%', 
        width: '100%' 
      }}
    >
      <DataGrid
        rows={musics}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  )
}