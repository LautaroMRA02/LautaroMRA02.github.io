import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

const StyledCubeFront = styled.div`
    
    transform: translateZ(1000px) rotateY(0deg);
    #redes{
        color: black;
    }
`;
export function CubeFront() {
    return(
       <StyledCubeFront className="cube-face">
            <h1>HOLA</h1>
            <header>
            </header>
            <main>
            </main>
            <bottom id>
                <p id='redes'>redes</p>
            </bottom>
        </StyledCubeFront> 
    )
}
