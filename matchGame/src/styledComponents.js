import styled from 'styled-components'

export const GameContainer = styled.div`
  min-height: 100vh;
  border: 2px solid red;
`
export const HeaderContainer = styled.div`
  background-color: #2c0e3a;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 40px;
  padding-right: 60px;
`

export const Logo = styled.img`
  width: 14%;
  height: 7vh;
`
export const ScoreAndTimerContainer = styled.div`
  display: flex;
  min-width: 20%;
`
export const ScoreText = styled.p`
  color: #ffffff;
`
export const Highlight = styled.p`
  color: #fec653;
  margin-left: 10px;
  margin-right: 35px;
`
export const TimerImg = styled.img`
  margin-top: 26px;
  width: 10%;
  height: 10%;
`
