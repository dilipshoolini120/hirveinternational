import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Imagepath1 from './images/textile-img-1.jpg'
import Imagepath2 from './images/grains-img-1.jpg'
import Imagepath3 from './images/spices-img-1.jpg'


function Cards() {
  return (
    <div className='cards'>
        <h3>At Hirve International, we offer a diverse range of premium products that cater to the unique demands of the global market. Our core offerings include:</h3>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards_items'>
                    <CardItem 
                    imgpath={Imagepath2}
                    text="As a trusted supplier of high-quality grains, we provide a wide array of staple crops including rice, wheat, and corn. Whether it’s for consumer markets or large-scale food production, our grains are cultivated under strict quality control, ensuring purity, freshness, and nutritional value."
                    alt='grains'
                    label ='Grains'
                    path = '/products'
                    />
                    <CardItem 
                    imgpath={Imagepath1}
                    text="We source the finest textiles and fabrics, crafted with precision and care. From luxurious cotton and silks to durable, high-performance materials, our collection is designed to meet the standards of the fashion, home décor, and industrial sectors worldwide."
                    alt='textile and fabrics'
                    label ='Textile & Fabric'
                    path = '/products'
                    />
                    <CardItem 
                    imgpath={Imagepath3}
                    text="Our spices bring the world to your table, offering rich aromas and bold flavors that enhance culinary creations. Handpicked from the best sources, we offer an extensive selection of premium spices, from aromatic cardamom and vibrant turmeric to exotic pepper varieties, perfect for every cuisine."
                    alt='spices'
                    label ='Spices'
                    path = '/products'
                    />
                </ul>
            </div>
        </div>
        <h3>Each product we deliver is a testament to our commitment to excellence, ensuring that quality and authenticity are never compromised.</h3>
    </div>
  )
}

export default Cards