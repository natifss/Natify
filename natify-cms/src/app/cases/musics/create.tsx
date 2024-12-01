import { useState } from "react";
import { IMusic } from "../../../@libs/types";
import { MusicForm } from "./form";

export function MusicCreate() {
  const [music, setMusic] = useState<IMusic>({
    title: '',
    description: '',
    poster: '',
    ageRating: '',
  });

  return (
    <MusicForm music={music} setMusic={setMusic}  showForm={true} />    
  )
}