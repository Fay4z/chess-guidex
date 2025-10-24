import RootLayout from "@/layouts/RootLayout";
import BasicIntro from "@/pages/basics/BasicIntro";
import Basics from "@/pages/basics/Basics";
import ChessMovements from "@/pages/basics/ChessMovements";
import WhatIsChess from "@/pages/basics/WhatIsChess";
import HomePage from "@/pages/HomePage";
import Openings from "@/pages/Openings";
import Puzzles from "@/pages/Puzzles";
import Quiz from "@/pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RootLayout/>}>
                        <Route index element={<HomePage/>} />
                        <Route path="basics" element={<Basics/>} />
                        <Route path="basics/intro" element={<BasicIntro/>}>
                            <Route index element={<WhatIsChess/>} />
                            <Route path="chessMovements" element={<ChessMovements/>} />
                        </Route>
                        <Route path="openings" element={<Openings/>} />
                        <Route path="puzzles" element={<Puzzles/>} />
                        <Route path="quiz" element={<Quiz/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes