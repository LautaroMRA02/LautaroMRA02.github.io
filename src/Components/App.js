import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { navigate, useRoutes, usePath } from 'hookrouter'

import AppProvider from './AppProvider.js'
import { AppContext } from './AppProvider.js'

const StyledApp = styled.div`
    position: relative;

    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 5rem 1fr;
    #sidebar-open, #sidebar-close {
        transition: all 2s;
    }
    &.sidebar-open {
        grid-template-columns: 32rem 1fr;
    }
    
    color: #ccc;
    background: #000;
    #sidebar {
        position: relative;
        display: flex;

        flex-direction:column;
        background: transparent;
        
        #sidebar-top {
            padding: 1rem;
            .link:not(:first-child) {
                margin-top: .5rem;
                }
            .link {
                font-size: 1.2rem;
                &:hover{ cursor: pointer;}

                 &.selected{ 


                    color: #acf9fb;
                    transition: .1s;
                    font-size:1.3rem
                }
            }
            &.sidebar-open {
                transition: .2s;
                grid-template-columns: 32rem 1fr;
                
            }
            &.sidebar-close {
                width:0px;
                padding:0px;
                opacity:0;
                overflow:hidden;
                }
        }
        #sidebar-bottom{
            display: flex;
            flex-direction: row-reverse;


        #sidebar-toggle {
            width: 4.4rem;
            height: 4.4rem;

           &:hover{ cursor: pointer;} 
            }   
        }
    }
    #content {background: #000;}
`;
import { GS } from './GS';
import { Dashboard } from './Dashboard';
import { Cube } from './Cube';

function App() {
    const routes = {
        '/' : () => <Dashboard/>,
        '/cube': () => <Cube/>
    }
    const routeResult = useRoutes(routes);
    /*useEffect (() => {
        if(window.location.pathname !== '/'){
            navigate('/');
        }
    },[]);*/
    return(
        <AppProvider>
            <AppContext.Consumer>
                {({ sidebar, setSidebar, path }) => (
                    <StyledApp id="bar"className={sidebar ? 'sidebar-open':'sidebar-close'}>
                        <GS/>
                        <div id="sidebar">
                            <div id="sidebar-top" className={sidebar ? 'sidebar-open':'sidebar-close'}>
                                <div 
                                    id="link" 
                                    className={`link ${path === '/' ? 'selected' : ''}`} 
                                    onClick={()=> navigate ('/')}
                                >Dashboard</div> 
                                <div id="link" className={`link ${path === '/cube' ? 'selected' : ''}`} onClick={()=> navigate ('/cube')}>Cube</div> 
                            </div>
                            <div className="flex-filler"></div>
                            <div id="sidebar-bottom">
                                <img id="sidebar-toggle" src="/images/dedo.png" onClick={() => setSidebar(!sidebar)} />
                            </div> 
                        </div>
                        <div id="content">
                            { routeResult }
                        </div>
                    </StyledApp>
                )}
            </AppContext.Consumer>
        </AppProvider>
    )
}
 

if(document.getElementById('react_root')) {
    ReactDOM.render(<App/>, document.getElementById('react_root'));
}
