import Card from '../components/Card'
import Confetti from 'react-confetti'
import { GameLevel, Text } from '../styled-components/General.styled'
import { useGame } from '../hooks/useGame'

export default function GamePage() {
  const { actualGame, cardItems, points, win } = useGame()

  return (
    <>
      {/* {win && (
        <div style={{ position: 'absolute', top: '200px' }}>
          <Text size="70px">Felicidades</Text>
        </div>
      )} */}

      {/* <TitleLevel>
        <BoxCentered>
          <Text size="200px">Nivel</Text>
          <Text size="180px">{config.level}</Text>
        </BoxCentered>
      </TitleLevel> */}
      <GameLevel>
        {win ? (
          <>
            <Confetti
              recycle={false}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            />
          </>
        ) : null}
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 20,
          }}
        >
          <div style={{ display: 'flex' }}>
            <Text size="40px">Level {actualGame.level}</Text>
          </div>
          <Text size="50px">Points</Text>
          <Text size="100px">
            {points} / {actualGame.points}
          </Text>
          <Text size="30px">
            Congrats!
          </Text>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '70%',
            height: 'auto',
            justifyContent: 'center',
          }}
        >
          {cardItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </GameLevel>
    </>
  )
}
