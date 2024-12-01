import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICategory, IGenre, IMusic } from "../../../@libs/types";
import { CategoryService } from "../../../services/category.service";
import { GenreService } from "../../../services/genre.service";
import { MusicService } from "../../../services/music.service";
import { MultiSelect } from '../../components/ui/multi-select';
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";

type MusicFormProps = {
  music: IMusic;
  setMusic: (music: IMusic) => void;
  showForm: boolean;
}
export function MusicForm({
  music,
  setMusic,
  showForm
}: MusicFormProps) {

  const navigate = useNavigate();

  //State - Loading
  const [loading, setLoading] = useState(false)

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleDelete = () => {
    setLoading(true)

    if (music.id) {
      MusicService.remove(music.id)
        .then(() => {
          navigate('/musics');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  const handleSave = () => {
    setLoading(true);

    if (music.id) {
      MusicService.update(music.id, music)
        .then(() => {
          navigate('/musics');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    } else {
      MusicService.create(music)
        .then(() => {
          navigate('/musics');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  useEffect(() => {
    GenreService.getAll()
      .then(result => {
        setGenres(result.data)
      })

    CategoryService.getAll()
      .then(result => {
        setCategories(result.data)
      })
  }, [])

  const  handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    setLoading(true);

    if(files && files[0]) {
      const file = files[0];

      MusicService.upload(file)
        .then(result => {
          if (result.data) {
            const { fullPath } = result.data
            setMusic({...music, poster: fullPath});
            toast.success('Arquivo carregado com sucesso')
          }
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }

  return (
    <SideForm
      open={showForm}
      title="Cadastro de Filmes"
      onSave={handleSave}
      {...(music.id && { onDelete: handleDelete })}
      loading={loading}
    >
      <TextField
        label="Título do Filme"
        variant="outlined"
        size="small"
        value={music.title || ''}
        onChange={(event) => setMusic({ ...music, title: event.target.value })}
        fullWidth
        required
        autoFocus
      />
      <TextField
        label="Sinopse"
        variant="outlined"
        size="small"
        value={music.description || ''}
        onChange={(event) => setMusic({ ...music, description: event.target.value })}
        fullWidth
        required
        multiline
        rows={6}
      />

      <MultiSelect
        selected={music.genres || []}
        onChange={(genres) => setMusic({ ...music, genres })}
        items={genres}
        label="Gêneros"
      />

      <MultiSelect
        selected={music.categories || []}
        onChange={(categories) => setMusic({ ...music, categories })}
        items={categories}
        label="Categorias"
      />
      <Stack
        direction="row"
      >
        <FormControl
          size="small"
          fullWidth
        >
          <InputLabel>Classificação</InputLabel>
          <Select
            label="Classificação Etária"
            value={music.ageRating || ''}
            onChange={(event) => setMusic({ ...music, ageRating: event.target.value })}            
          >
            <MenuItem value="L">Livre para todas as idades</MenuItem>
            <MenuItem value="10">Não recomendado para menores de 10 anos</MenuItem>
            <MenuItem value="12">Não recomendado para menores de 12 anos</MenuItem>
            <MenuItem value="14">Não recomendado para menores de 14 anos</MenuItem>
            <MenuItem value="16">Não recomendado para menores de 16 anos</MenuItem>
            <MenuItem value="18">Não recomendado para menores de 18 anos</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <TextField
        label="Poster"
        variant="outlined"
        size="small"
        value={music.poster || ''}
        onChange={(event) => setMusic({ ...music, poster: event.target.value })}
        fullWidth
        required
      />
    <input type="file" onChange={handleChangeFile}/>
    </SideForm>
  )
}