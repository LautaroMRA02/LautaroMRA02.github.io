import React, {useState} from 'react'
import styled from 'styled-components'
const StyledCube = styled.div`
    position: relative;

    top:0px;
    left:0px;
    width: calc( 100% - 4rem ) ;
    height:calc(100% - 4rem);
    background: #000;
    perspective: 1000px;

  
    
    #cube-wrapper {
        position: relative;

        top: 0px;
        left: 0px;

        width: 100%;
        height: 100%;
        
        transform-style: preserve-3d;
        transform: translateZ(-1000px);
        transition: 1s;


        &.show-front  { transform: translateZ(-1000px) rotateY(   0deg);  }
        &.show-back   { transform: translateZ(-1000px) rotateY(-180deg);  }
        &.show-right  { transform: translateZ(-1000px) rotateY( -90deg);  }
        &.show-left   { transform: translateZ(-1000px) rotateY(  90deg);  }
        &.show-top    { transform: translateZ(-1000px) rotateX( -90deg);  }
        &.show-bottom { transform: translateZ(-1000px) rotateX(  90deg);  }
         

        .cube-face {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            border: 3px solid #acf9fb; 

            font-size: 2rem;
            font-weight:bold;
            color: #fff;
            text-align: center;
            background: #0F1624;

        }
    }




    #cube-controls {
        position: absolute;

        bottom: -4rem;
        left: 0px;
        margin-bottom: -10px;
        height: 4rem;
        display: flex;
        align-item: center;
        
        .cube-control {
            &.selected {
                color:#acf9fb;font-size: 1.4rem;
            }
            
            &:hover{ cursor: pointer;} 
            &:not(:first-child) { margin-left: 1rem; }
            font-size: 1.2rem;
        }

    }
`;

import { CubeFront } from './Cube3D/Cubefront'  
import { CubeBack } from './Cube3D/CubeBack'  
import { CubeRight } from './Cube3D/Cuberight'  
import { CubeLeft } from './Cube3D/Cubeleft'  
import { CubeTop } from './Cube3D/Cubetop'  
import { CubeBottom } from './Cube3D/Cubebottom'  

export function Cube() {
    const [face, setFace] = useState('show-face')
    return(
        <StyledCube>
            <div  id="cube-wrapper" className={`${face}`}>
               <CubeFront /> 
               <CubeBack /> 
               <CubeRight /> 
               <CubeLeft /> 
               <CubeTop /> 
               <CubeBottom /> 
            </div>
            <div id="cube-controls">
                <span className={`cube-control ${face === 'show-front'? 'selected' : '' }`} onClick={() => setFace('show-front')}>HOME</span> 
                <span className={`cube-control ${face === 'show-right'? 'selected' : '' }`} onClick={() => setFace('show-right')}>Mis Proyectos</span> 
                <span className={`cube-control ${face === 'show-back'? 'selected' : '' }`} onClick={() => setFace('show-back')}>menu3</span> 
                <span className={`cube-control ${face === 'show-left'? 'selected' : '' }`} onClick={() => setFace('show-left')}>menu4</span> 
                <span className={`cube-control ${face === 'show-top'? 'selected' : '' }`} onClick={() => setFace('show-top')}>menu5</span> 
                <span className={`cube-control ${face === 'show-bottom'? 'selected' : '' }`} onClick={() => setFace('show-bottom')}>menu6</span> 
            </div>
        </StyledCube>
    )
}
