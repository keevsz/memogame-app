import ReactCardFlip from 'react-card-flip'
import useSound from 'use-sound'
import { Card } from '../interfaces/Game.interface'
import useGameStore from '../store/game-store'
import { CardBox, ImageCard } from './Card.styled'
import card_sound from '../assets/card-flip.mp3'

interface Props {
  item: Card
}

export default function CardComponent({ item }: Props) {
  const { setCardTags, flipCard, setLoading, loading } = useGameStore()
  const [play] = useSound(card_sound)

  const handleClick = (tag: string) => {
    if (loading) return
    setLoading(true)
    
    if (!item.isFlipped) play()
    flipCard(item)
    setCardTags(tag)
  }

  return (
    <div style={{ margin: '10px' }}>
      <ReactCardFlip isFlipped={item.isFlipped} flipDirection="horizontal">
        <CardBox onClick={() => handleClick(item.tag)}>
          <span>?</span>
        </CardBox>
        <CardBox>
          <ImageCard src={item.image} />
        </CardBox>
      </ReactCardFlip>
    </div>
  )
}
