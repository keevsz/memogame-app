import styled from 'styled-components'

export const CardBox = styled.div`
  user-select: none;
  width: 140px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  background-color: #1b1e2e;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    span {
      font-size: 160px;
    }
  }
  transition: all 0.2s;
  span {
    font-size: 150px;
    transition: all 0.5s;
  }
`

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
  transition: all 0.2s;
`
