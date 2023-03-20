import { useEffect, useState } from 'react'
import useConfigStore from '../store/config-store'
import useGameStore from '../store/game-store'
import useSound from 'use-sound'
import celebration_sound from '../assets/celebration.mp3'

export const useGame = () => {
  const [play] = useSound(celebration_sound)

  const {
    cardsTag,
    resetCardTags,
    resetCardItem,
    increasePoints,
    points,
    cardItems,
    setLoading,
    actualGame,
  } = useGameStore()

  const { config } = useConfigStore()

  const [win, setWin] = useState(false)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false)
    }, 800)

    if (cardsTag.length > 1) {
      if (cardsTag[0] == cardsTag[1]) {
        increasePoints()
        if (points === actualGame.points - 1) {
          setWin(true)
          play()
        }
      } else {
        setTimeout(() => {
          resetCardItem(cardsTag)
        }, 750)
      }

      resetCardTags()
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [cardsTag])

  return {
    actualGame,
    points,
    win,
    cardItems,
  }
}
