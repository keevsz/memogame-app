import Welcome from './pages/Welcome'
import { Container } from './pages/Welcome.styled'
import { Normalize } from 'styled-normalize'
import { WavyContainer } from 'react-wavy-transitions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './pages/Game'

export default function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Normalize />
      <Container>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
