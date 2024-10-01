import React from 'react'

function ProductItemF(props) {
  return (
    <>
    <li className='products__item__f'>
        <figure className='products__item__pic-wrap'data-category={props.label}>
            <img src={props.imgpath} alt={props.alt} className='products__item__img__f'/>
        </figure>
        <div className='products__item__info'>
            <h5 className='products__item__text'>{props.text}</h5>
        </div>
    </li>
    </>
  )
}

export default ProductItemF