export interface Game {
  points: number,
  level: number
  cards: Card[]
}

export interface Card {
  image: string
  tag: string
  id: string
  isFlipped: boolean
}
