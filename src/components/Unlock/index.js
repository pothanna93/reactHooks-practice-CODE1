import {useState} from 'react'

import {
  MainContainer,
  ImageElement,
  Description,
  ButtonEl,
  InfoDiv,
} from './styledComponents'

const img1 = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const img2 = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickBtn = () => {
    setLock(prevState => !prevState)
  }

  return (
    <>
      {lock ? (
        <MainContainer>
          <InfoDiv>
            <ImageElement src={img2} alt="unlock" />
            <Description>Your Device is UnLocked</Description>
            <ButtonEl type="button" onClick={onClickBtn}>
              Lock
            </ButtonEl>
          </InfoDiv>
        </MainContainer>
      ) : (
        <MainContainer>
          <InfoDiv>
            <ImageElement src={img1} alt="lock" />
            <Description>Your Device is Locked</Description>
            <ButtonEl type="button" onClick={onClickBtn}>
              Unlock
            </ButtonEl>
          </InfoDiv>
        </MainContainer>
      )}
    </>
  )
}

export default Unlock
