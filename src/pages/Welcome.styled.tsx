import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0f111a;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  background-color: red;
`

export const BoxWelcome = styled.div`
  border: solid 5px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  align-items: center;
  cursor: pointer;

  animation: fadeIn 1.2s, increasePadding 0.8s ease-in-out infinite alternate;
  @keyframes increasePadding {
    from {
      border-color: #2f145c;
    }
    to {
      border-color: #240f49;
    }
  }

  

  :hover {
    font-size: 17px;
    border-color: #f6f6f6;
  }
  transition: font-size 0.5s;
`
