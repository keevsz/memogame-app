import styled from 'styled-components'

export const Text = styled.div<{ size: string }>`
  font-size: ${(props) => props.size};
  user-select: none;
`

export const TitleLevel = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const BoxCentered = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const GameLevel = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`
