import React from 'react'

function ProductItemS(props) {
  return (
    <>
    <li className='products__item__s'>
        <figure className='products__item__pic-wrap'data-category={props.label}>
            <img src={props.imgpath} alt={props.alt} className='products__item__img__s'/>
        </figure>
        <div className='products__item__info'>
            <h5 className='products__item__text'>{props.text}</h5>
        </div>
    </li>
    </>
  )
}

export default ProductItemS