import React from 'react'
import styled from 'styled-components'

// Styled component
const SliderWrapper = styled.div.attrs({
    className: 'slider-wrapper'
    }) `
    margin-top: ${props => props.top || "0"};
    margin-left: ${props => props.left || "0"};
    position: relative;
    width: ${props => props.width || "100%" };
    height: 300px;
    
`
const Slider = styled.div.attrs({
    className: 'slider'
    })`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        width: 2rem;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.bgSliderTrack || "#CBF4C0"} ;
        border-radius: 100vw;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.bgSliderThumb ||"#FD89FF" } ;
        border-radius: 100vw;
       
    }
    
    

`
const SliderInner = styled.div.attrs({
    className: 'slider-inner',
    })`
    display: flex;
    width: 1000px;
    height: 100%;
    display: flex;
    padding: 0 40px;
    position: relative;
`
const Item = styled.div.attrs({
    className: 'item',
    })`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 90%;
    margin: 0 ${props=> props.spaceBetween || "50px"};
    top: 1%;
    border: 1px solid black;
`



export default function HorizontalSlider ({ top, left, spaceBetween, folderName, fileName,width}) {
    const images = fileName || []
    const folder = folderName || ''
    const list = images.map((file, index)=><li key={index} style={{listStyle:"none"}}><Item spaceBetween ={spaceBetween} >
        <img src={require(`../asset/${folder}/${file}`)} style={{width: "100%"}} alt="gallery" />
    </Item></li>)





    return(
        <SliderWrapper  width={width} top = {top} left = {left} >
            <button className="pre" ><i class="fas fa-angle-left"></i></button>
            <button className="next"><i class="fas fa-angle-right"></i></button>      
            <Slider>
                <SliderInner>

                    {list}
 
                </SliderInner>
            

            </Slider>

        </SliderWrapper>

    )


}

