import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import { Shop } from "../Shop/Shop"
import { Fans } from "../Fans/Fans"
import { Menu } from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer"
import { Hook } from "../Hook/Hook"
import { Carga } from "../Hook/Carga"
import { Music } from "../Music/Music"

export function Ruta(){
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/integrantes" element={<Members />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/fans" element={<Fans />} />
                <Route path="/asd" element={<Hook />} />
                <Route path="/carga" element={<Carga />} />
                <Route path="/musica" element={<Music />} />
            </Routes>
            <Footer/>
        </>
    )
}