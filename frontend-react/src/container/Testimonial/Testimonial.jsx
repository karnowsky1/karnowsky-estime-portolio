import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Testimonial.scss'
const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    
    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
  
  }, [])
  
  const testimonial = testimonials[currentIndex];
  return (
    <>
      {/* {console.log(testimonials[currentIndex])} */}
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonial.imageurl)} alt="testimonials" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonial.name}</h4>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)