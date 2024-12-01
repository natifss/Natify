import { Route, Routes } from "react-router-dom"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import CategoryLayout from "./app/cases/categories/layout"
import { CategoryCreate } from "./app/cases/categories/create"
import { CategoryEdit } from "./app/cases/categories/edit"
import GenreLayout from "./app/cases/genres/layout"
import { GenreCreate } from "./app/cases/genres/create"
import { GenreEdit } from "./app/cases/genres/edit"
import MusicLayout from "./app/cases/musics/layout"
import { MusicCreate } from "./app/cases/musics/create"
import { MusicEdit } from "./app/cases/musics/edit"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/categories" element={ <CategoryLayout /> }>
            <Route path="new" element={<CategoryCreate />} />
            <Route path=":id" element={<CategoryEdit />} />
          </Route>
          <Route path="/genres" element={ <GenreLayout /> }>
            <Route path="new" element={<GenreCreate />} />
            <Route path=":id" element={<GenreEdit />} />
          </Route>
          <Route path="/movies" element={ <MusicLayout /> }>
            <Route path="new" element={<MusicCreate />} />
            <Route path=":id" element={<MusicEdit />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
