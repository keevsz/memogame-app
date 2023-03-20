import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Card, Game } from '../interfaces/Game.interface'

export const data: Game[] = [
  {
    level: 0,
    points: 5,
    cards: [
      {
        image:
          'https://cdn.pixabay.com/photo/2016/12/05/21/09/duck-1884934_1280.jpg',
        tag: 'd',
        id: '7',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_1280.jpg',
        tag: 'c',
        id: '6',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/12/06/guinea-pig-551479_1280.jpg',
        tag: 'e',
        id: '9',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        tag: 'b',
        id: '3',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg',
        tag: 'a',
        id: '2',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        tag: 'b',
        id: '4',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg',
        tag: 'a',
        id: '1',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2016/12/05/21/09/duck-1884934_1280.jpg',
        tag: 'd',
        id: '8',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/12/06/guinea-pig-551479_1280.jpg',
        tag: 'e',
        id: '10',
        isFlipped: false,
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_1280.jpg',
        tag: 'c',
        id: '5',
        isFlipped: false,
      },
    ],
  },
]

interface GameStore {
  loading: boolean
  setLoading: (loading: boolean) => void
  cardsTag: string[]
  cardItems: Card[]
  setCardTags: (tag: string) => void
  resetCardTags: () => void
  flipCard: (item: Card) => void
  resetCardItem: (items: string[]) => void
  points: number
  increasePoints: () => void
  actualGame: Game
}

const useGameStore = create<GameStore>()(
  devtools(
    // persist(
    (set) => ({
      loading: false,
      points: 0,
      increasePoints: () =>
        set((state) => ({
          points: state.points + 1,
        })),
      setLoading: (loading) => set(() => ({ loading })),
      cardsTag: [],
      cardItems: data[0].cards,
      setCardTags: (tag: string) =>
        set((state) => ({ cardsTag: state.cardsTag.concat(tag) })),
      resetCardTags: () => set({ cardsTag: [] }),
      flipCard: (item: Card) =>
        set((state) => ({
          cardItems: state.cardItems.map((value) =>
            value.id === item.id ? { ...value, isFlipped: true } : value
          ),
        })),
      resetCardItem: (items: string[]) => {
        set((state) => ({
          cardItems: state.cardItems.map((card) =>
            items.includes(card.tag) ? { ...card, isFlipped: false } : card
          ),
        }))
      },
      actualGame: data[0],
    })

    // ),
    // {
    //   name: 'game-storage',
    // }
  )
)
export default useGameStore
