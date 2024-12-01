import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMusic } from "../../../@libs/types";
import { MusicService } from "../../../services/music.service";
import { MusicForm } from "./form";

export function MusicEdit() {
  const params = useParams();

  const [music, setMusic] = useState<IMusic>({} as IMusic);

  useEffect(() => {
    
    if (params?.id) {
      MusicService.getById(params.id)
        .then(result => {
          setMusic(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <MusicForm music={music} setMusic={setMusic} showForm={true} />
    </>
    
  )
}