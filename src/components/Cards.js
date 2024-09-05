import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Imagepath1 from './images/img-9.jpg'
import Imagepath2 from './images/img-5.jpg'


function Cards() {
  return (
    <div className='cards'>
        <h1>Check this out</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards_items'>
                    <CardItem 
                    imgpath={Imagepath1}
                    text="Let's find out more about it"
                    alt='work1'
                    label ='Information'
                    path = '/products'
                    />
                    <CardItem 
                    imgpath={Imagepath2}
                    text="export item 2"
                    alt='work2'
                    label ='Information -2'
                    path = '/about-us'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards