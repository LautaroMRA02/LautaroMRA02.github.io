import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {Container, Div1,Div3, SocialIcons} from './CubeStyled'
import {DiCssdeck} from 'react-icons/di'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Hero from '../Hero/Hero'


const StyledCubeFront = styled.div`
    
    transform: translateZ(1000px) rotateY(0deg);
    border-radius: 20px;
`;

export function CubeFront() {
    return(
       <StyledCubeFront className="cube-face">
            <Container>
                <Div1>
                    <DiCssdeck size="3rem"></DiCssdeck>
                    <a>Portafolio</a>
                </Div1>
                <Div3>
                    <SocialIcons href="https://github.com/LautaroMRA02" target="_blank">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/zth.l.a.u.t.a.ro_r.a/?hl=es-la" target="_blank">
                        <AiFillInstagram size="3rem"/>
                    </SocialIcons>
                </Div3>
        
            </Container>
                <Hero />
        </StyledCubeFront> 
    )
}
