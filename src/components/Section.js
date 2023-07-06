import React from 'react'
import { styled } from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section( {title, description, leftbtnText,rightbtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <TextItem>
            <h1>{title}</h1>
            <p>{description}</p>
        </TextItem>
        </Fade>

        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftbtnText}
            </LeftButton>
            { rightbtnText &&
                <RightButton>
                  {rightbtnText}
            </RightButton>
            }
            
        </ButtonGroup>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background:orange;
    background-image: ${props => `url("/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    scroll-snap-align: start;
    scroll-snap-stop:always;
`

const TextItem = styled.div`
     padding-top: 15vh;
     text-align: center;
`

const ButtonGroup = styled.div`
     display: flex;
     margin-bottom:30px;
     @media(max-width: 768px){
        flex-direction:column
     }
`

const LeftButton = styled.div`
     background-color: rgba(23,26,32,0.8) ;
     height: 40px;
     width: 256px;
     color: white;
     display: flex;
     justify-content:center;
     align-items: center;
     border-radius: 100px;
     opacity: 0.85;
     text-transform: uppercase;
     font-size:12px;
     cursor:pointer;
     margin:8px;
`

const RightButton = styled(LeftButton)`
     background: white;;
     opacity:0.65;
     color: black;
`