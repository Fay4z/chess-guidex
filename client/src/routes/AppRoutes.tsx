import RootLayout from "@/layouts/RootLayout";
import Basics from "@/pages/basics/Basics";
import HomePage from "@/pages/HomePage";
import Openings from "@/pages/Openings";
import Puzzles from "@/pages/Puzzles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RootLayout/>}>
                        <Route index element={<HomePage/>} />
                        <Route path="/basics" element={<Basics/>} />
                        <Route path="/openings" element={<Openings/>} />
                        <Route path="/puzzles" element={<Puzzles/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes