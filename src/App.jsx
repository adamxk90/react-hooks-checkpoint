import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MovieList from './components/MovieList'
import SingleMovie from './components/SingleMovie'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="Movies" element={<MovieList />} />
            <Route path="/Movies/:slug" element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <div className='homePage'>
          <h1>Films, séries et bien plus en illimité.</h1>
          <h2>Ravis de vous revoir !</h2>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
