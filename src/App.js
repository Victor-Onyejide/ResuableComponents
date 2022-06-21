import './App.css';
import HorizontalSlider from './component/HorizontalSlider';
import { useEffect } from 'react';


function App() {

  const images = ["pic1.png","pic1.png","pic1.png","pic1.png","pic1.png","pic1.png","pic1.png","pic1.png"]
  const images2 = ["app_logo.png", "app_logo.png","app_logo.png","app_logo.png","app_logo.png","app_logo.png","app_logo.png","app_logo.png"]

  const scroll = () =>{
    const slider = document.querySelectorAll('.slider-inner');
    const btn_pre = document.querySelectorAll('.pre');
    const btn_next = document.querySelectorAll('.next');

    slider.forEach((slide) => {
      slide.addEventListener('wheel', (e) => {
        e.preventDefault()
        slide.parentElement.scrollLeft += e.deltaY; 
        
      })
    })

    btn_pre.forEach((pre) => {
      pre.addEventListener('click', () =>{
       
        let move = pre.parentElement.querySelector('.slider');
        move.scrollLeft -= 110

      })
    })

    btn_next.forEach((next) => {
      next.addEventListener('click', () => {
        let move = next.parentElement.querySelector('.slider');
        
        move.scrollLeft += 110
      })
    })
}



useEffect (()=>{
    scroll()
}, [])
  return (
    <div className="App">

    
      <HorizontalSlider  folderName="pictures1" fileName={images} />

       <HorizontalSlider  folderName="pictures2"  fileName={images2} spaceBetween="20px" top="50px"/>

    </div>
  );
}

export default App;
