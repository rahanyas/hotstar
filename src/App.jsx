import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Sidebar from "./components/elements/Sidebar"
import MoviesPage from "./components/pages/moviesPage"
import HomePage from "./components/pages/HomePage"
import './App.css'
import Layout from "./layout"

function App() {
  return (
    // <Router>
    //   <div className="h-screen w-full">
    //   <Sidebar />
    //    <Routes>
    //       <Route path="/" element={<HomePage/>}/>
    //       <Route  path="/movies" element={<MoviesPage/>} />
    //    </Routes>

    // </div>
    // </Router>

    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}/>
              <Route path="/movies" element={<MoviesPage />}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
