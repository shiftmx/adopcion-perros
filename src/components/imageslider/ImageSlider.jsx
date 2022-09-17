import React from 'react'
import './imageSlider.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import sliderImg1 from '../../assets/perros/nosotros_slideshow-1.png';
import sliderImg2 from '../../assets/perros/nosotros_slideshow-2.png';
import sliderImg3 from '../../assets/perros/nosotros_slideshow-3.png';
import sliderImg4 from '../../assets/perros/nosotros_slideshow-4.png';

import Breakpoint from '../breakpoint/Breakpoint';

const Slideshow = () => (
    <>
    <Breakpoint at="320px">
        <Carousel 
            showThumbs={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} swipeable={true} interval={4000} showStatus={false} showArrows={false}>
            <div className='slider_item'>
                <img src={sliderImg1} alt="Slider 1" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg2} alt="Slider 2" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg3} alt="Slider 3" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg4} alt="Slider 4" />
            </div>
        </Carousel>
    </Breakpoint>

    <Breakpoint at="sm">
        <Carousel 
            showThumbs={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} swipeable={true} interval={4000} showStatus={false} showArrows={false}>
            <div className='slider_item'>
                <img src={sliderImg1} alt="Slider 1" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg2} alt="Slider 2" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg3} alt="Slider 3" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg4} alt="Slider 4" />
            </div>
        </Carousel>
    </Breakpoint>

    <Breakpoint at="md">
        <Carousel 
            showThumbs={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} swipeable={true} interval={4000} showStatus={false} showArrows={false}>
            <div className='slider_item'>
                <img src={sliderImg1} alt="Slider 1" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg2} alt="Slider 2" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg3} alt="Slider 3" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg4} alt="Slider 4" />
            </div>
        </Carousel>
    </Breakpoint>

    <Breakpoint at="1024px">
        <Carousel 
            showThumbs={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} swipeable={true} interval={4000} showStatus={false} showArrows={true}>
            <div className='slider_item'>
                <img src={sliderImg1} alt="Slider 1" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg2} alt="Slider 2" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg3} alt="Slider 3" />
            </div>
            <div className='slider_item'>
                <img  src={sliderImg4} alt="Slider 4" />
            </div>
        </Carousel>
    </Breakpoint>
    </>
  )

const ImageSlider = () => {

  return (
    <>
        <Slideshow/>
    </>
  )
}

export default ImageSlider