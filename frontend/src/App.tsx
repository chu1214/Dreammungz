import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sample from "./pages/Sample"
import NftListPage from "./pages/NftList"
import NftDetail from "./pages/NftDetail"
import GameStart from "./pages/GameStart"
import GamePlaying from "./pages/GamePlaying"

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center bg-blue-100">
      <BrowserRouter>
        <div className="border w-4/5 h-4/5 flex bg-white">
          <Navbar />
          <div className="4/5 border w-full p-8">
            <Routes>
              <Route path="/" element={<Sample />} />
              <Route path="/start" element={<GameStart />} />
              <Route path="/game" element={<GamePlaying />} />
              <Route path="/nft">
                <Route path="list" element={<NftListPage />} />
                <Route path="detail/:id" element={<NftDetail />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
