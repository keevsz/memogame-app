import { WavyLink } from 'react-wavy-transitions'
import { BoxWelcome } from './Welcome.styled'
import useSound from 'use-sound'
import ambient_music from '../assets/soundtrack.mp3'

export default function Welcome() {
  const [play] = useSound(ambient_music, { volume: 0.25 })

  play({})
  return (
    <>
      <WavyLink to="/game" color="#251143">
        <BoxWelcome>
          <h1>Bienvenido</h1>
          <h1>Click para empezar!</h1>
        </BoxWelcome>
      </WavyLink>
    </>
  )
}
