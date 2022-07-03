import React from 'react';
import styled,{keyframes } from 'styled-components';
import { useState } from 'react';

const Nav = styled.div.attrs({
    className:'nav'
}
)
`
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Water+Brush&display=swap');

    max-width: 100%;
    padding: 7px 15px;

    position: fixed;
    left:0;
    right: 0;
    top:0;
    background-color: white;
`

const Logo = styled.div.attrs({
    className:'logo'
})
`   font-family: 'Water Brush', cursive;
    font-size:1.5rem;
    text-align:center;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 50%;
    padding 0 5px;
    float: left;

    
   
`

const NavLinks = styled.div.attrs({
    className:'nav-links'
})
`
    display: ${props=> props.displayLinks || 'flex'} ;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Indie Flower', cursive;
    font-weight: bold;
    font-size: 1.2rem;
    height: 100%;
    float: right;
    
    
    @media (max-width: 800px) {
        display:none;
    }

    ${ props => props.rotate?`@media (max-width: 800px) {
        display:flex;
        flex-direction: column;
        position: absolute;
        top: 105px;
        right: 20px;
        text-align: center;    }` : ''}
`

const NavLink = styled.div.attrs({
    className: 'link'
})
` transition: background-color .3s ease-in, color .2s .1s ease-in-out ; 
   padding: 5px 20px;
  &:hover {
        background-color: black;
        color: white;
    }

@media (max-width: 800px) {
        padding: 10px 10px;
    }

   

`
const Menu = styled.div.attrs({
    className: 'menu'
})
`   
    width: 40px;
    display: ${props => props.displayMenu || 'none'};
    flex-direction: column;
    cursor: pointer;
    float: right;
    

    @media (max-width: 800px) {
        display:block;
    }

`
const Bar = styled.div.attrs({
    className: 'bar'
})
`

 width: 25px;
 height: 4px;
 background-color: black;
 border-radius: 20px;
 margin-top: 5px;
 transition: 0.4s;   
`
const wiggle = keyframes `
    50% {
        transform: translateX(10px) rotate(5deg);
    }
    0%, 100% {
        transform: translateX(-10px) rotate(-5deg);
    }
`
const Animate = styled.div.attrs({
    className: 'animate'
})
`
padding: 5px 20px;
color: red;
transform-origin: 50% 0%;
cursor: pointer;
animation: ${props => props.wiggle ? wiggle:''} 0.6s infinite;



`

export default function NavBar ({links, animate}) 
{
    const nav_links = links || [];
    const animate_text = animate || '';
    var rotate_bar1,rotate_bar2,rotate_bar3;
    const [rotate, setRotate ] = useState(false)

    rotate_bar1=rotate_bar2=rotate_bar3 = rotate;

    const list_links = nav_links.map((link, index) => <li style={{listStyle:'none'}} key={index}>
                                                    <NavLink>
                                                        <a href={`#${link}`} className={`link${index + 1}`} style={{textDecoration:'none',
                                                        color:'inherit',
                                                        
                                                        }}>{link}</a>
                                                    </NavLink>
                                                 </li>)

    return (


        
            <Nav>
                <Logo>
                    Logo
                </Logo>
                <NavLinks rotate={rotate}>
                    {list_links}
                    <Animate wiggle>
                        {animate_text}
                    </Animate>
                </NavLinks>
                <Menu onClick={()=>setRotate(current => !current)} >
                    <Bar style={rotate_bar1 ? {transform: 'rotate(-45deg) translate(-5px,7.5px)'}: {transform:'none'}}/>
                    <Bar style={rotate_bar2 ?{opacity:0}:{opacity:100}}/>
                    <Bar style={rotate_bar3 ?{transform: 'rotate(45deg) translate(-4px, -7.5px)'}: {transform:'none'}}/>
                </Menu>
            </Nav>
        
    )
}
