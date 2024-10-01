import React from 'react'
import './ProdSection.css'
import ProductItemF from './ProductItemF'
import ProductItemS from './ProductItemS'
import Imagepath_rice from './images/grains/rice-img-1.jpg'
import Imagepath_wheat from './images/grains/wheat-img-1.jpg'
import Imagepath_bajra from './images/grains/bajra-img-1.jpeg'
import Imagepath_ragi from  './images/grains/ragi-img-1.jpg'
import Imagepath_jawar from  './images/grains/jawar-img-1.jpeg'
import Imagepath_ycorn from  './images/grains/ycorn-img-1.jpeg'
import Imagepath_wcorn from  './images/grains/wcorn-img-1.jpg'
import Imagepath_cotton from './images/textile/cotton-img-1.jpg'
import Imagepath_linen from  './images/textile/linen-img-1.jpg'
import Imagepath_chiffon from  './images/textile/chiffon-img-1.jpg'
import Imagepath_silk from  './images/textile/silk-img-1.jpg'
import Imagepath_polyester from  './images/textile/polyester-img-1.jpg'
import Imagepath_wool from  './images/textile/wool-img-1.jpg'
import Imagepath_ajwain from  './images/spices/ajwain-img-1.jpg'
import Imagepath_clove from  './images/spices/cloves-img-1.jpg'
import Imagepath_pepper from  './images/spices/black-pepper-img-1.jpeg'
import Imagepath_cumin from  './images/spices/cumin-img-1.jpg'
import Imagepath_daalchini from  './images/spices/daalchini-img-1.jpg'
import Imagepath_dhaniya from  './images/spices/dhaniya-img-1.jpg'
import Imagepath_elaichi from  './images/spices/elaichi-img-1.jpg'
import Imagepath_turmeric from  './images/spices/haldi-img-1.jpeg'
import Imagepath_mirch from  './images/spices/lal-mirch-img-1.jpg'
import Imagepath_hing from  './images/spices/hing-img-1.jpg'
import Imagepath_kaali from  './images/spices/kaali-elaichi-img-1.jpg'
import Imagepath_mace from  './images/spices/mace-img-1.jpg'
import Imagepath_methi from  './images/spices/methi-img-1.jpg'
import Imagepath_sarso from  './images/spices/mustard-img-1.jpg'
import Imagepath_nutmeg from  './images/spices/nutmeg-img-1.jpg'
import Imagepath_saunf from  './images/spices/saunf-img-1.jpg'
import Imagepath_chakri from  './images/spices/star-anise-img-1.jpg'
import Imagepath_tej from  './images/spices/tejpatta-img-1.jpg'
import Imagepath_pyaaz from  './images/spices/onion-img-1.jpg'
import Imagepath_lassan from  './images/spices/garlic-img-1.jpg'
import Imagepath_adrak from  './images/spices/ginger-img-1.jpg'



function ProdSection() {
  return (
    <div className='productss'>
      <h2 id='grains'>Grains:</h2>
        <div className='products__container'>
            <div className='products__wrapper'>
                <ul className='products__items'>
                    <ProductItemF
                    imgpath={Imagepath_rice}
                    text='Premium, hand-selected rice varieties that guarantee superior quality, flavor, and an unforgettable dining experience.'
                    alt='rice'
                    label='Rice'
                    />
                    <ProductItemS
                    imgpath={Imagepath_wheat}
                    text='Superior-quality wheat, carefully selected to deliver unmatched consistency and performance in every application'
                    alt='wheat'
                    label='Wheat'
                    />
                    <ProductItemF
                    imgpath={Imagepath_bajra}
                    text='Superior pearl millet, valued for its wholesome qualities and robust taste.'
                    alt='bajra'
                    label='Bajra'
                    />
                    <ProductItemS
                    imgpath={Imagepath_wcorn}
                    text='Pristine white corn, known for its mild flavor and versatility.'
                    alt='white-corn'
                    label='White Corn'
                    />
                    <ProductItemF
                    imgpath={Imagepath_ragi}
                    text='Nutrient-rich finger millet, a superfood staple in health-conscious diets.'
                    alt='ragi'
                    label='Ragi'
                    />
                    <ProductItemS
                    imgpath={Imagepath_ycorn}
                    text='High-grade yellow corn, ideal for food products, animal feed, and beyond.'
                    alt='yellow-corn'
                    label='Yellow Corn'
                    />
                    <ProductItemF
                    imgpath={Imagepath_jawar}
                    text='Quality sorghum, perfect for gluten-free foods and nutritious recipes.'
                    alt='jawar'
                    label='Jawar'
                    />
                </ul>                
            </div>
        </div>
      <h2 id='textile'>Textile & Fabric:</h2>
        <div className='products__container'>
            <div className='products__wrapper'>
                <ul className='products__items'>
                    <ProductItemF
                    imgpath={Imagepath_cotton}
                    text='Soft, breathable cotton, known for its versatility and comfort in a wide range of uses.'
                    alt='cotton'
                    label='Cotton'
                    />
                    <ProductItemS
                    imgpath={Imagepath_linen}
                    text='Luxurious linen, offering unmatched durability and a timeless, elegant texture.'
                    alt='linen'
                    label='Linen'
                    />
                    <ProductItemF
                    imgpath={Imagepath_silk}
                    text='Exquisite silk, prized for its natural sheen and sumptuous, smooth feel.'
                    alt='silk'
                    label='Silk'
                    />
                    <ProductItemS
                    imgpath={Imagepath_chiffon}
                    text='Lightweight chiffon, perfect for creating flowing, graceful designs with a touch of sophistication.'
                    alt='chiffon'
                    label='Chiffon'
                    />
                    <ProductItemF
                    imgpath={Imagepath_wool}
                    text='Premium wool, valued for its warmth, resilience, and natural moisture-wicking properties.'
                    alt='wool'
                    label='Wool'
                    />
                    <ProductItemS
                    imgpath={Imagepath_polyester}
                    text='High-performance polyester, delivering strength, durability, and versatility in modern textiles.'
                    alt='polyester'
                    label='Polyester'
                    />
                </ul>                
            </div>
        </div>
      <h2 id='spices'>Spices:</h2>
      <div className='products__container'>
            <div className='products__wrapper'>
                <ul className='products__items'>
                    <ProductItemF
                    imgpath={Imagepath_ajwain}
                    text='Carom seeds bring a sharp, pungent flavor to fried foods, breads, and snacks.'
                    alt='ajwain'
                    label='Carom Seeds'
                    />
                    <ProductItemS
                    imgpath={Imagepath_pepper}
                    text='Bold black pepper, delivering a sharp, robust kick to enhance savory dishes.'
                    alt='kali mirch'
                    label='Black Pepper'
                    />
                    <ProductItemF
                    imgpath={Imagepath_clove}
                    text='Intense cloves, bringing a sweet, pungent flavor perfect for both sweet and savory recipes.'
                    alt='laung'
                    label='Clove'
                    />
                    <ProductItemS
                    imgpath={Imagepath_cumin}
                    text='Rich, aromatic cumin, a staple in global cuisines with its warm, spicy undertones.'
                    alt='jeera'
                    label='Cumin Seeds'
                    />
                    <ProductItemF
                    imgpath={Imagepath_daalchini}
                    text='Sweet, warm cinnamon, a beloved spice that adds depth to everything from desserts to curries.'
                    alt='cinnamon'
                    label='Cinnamon'
                    />
                    <ProductItemS
                    imgpath={Imagepath_dhaniya}
                    text='Earthy and warm, coriander adds a subtle, nutty flavor to curries, soups, and spice blends'
                    alt='coriander'
                    label='Coriander seeds'
                    />
                    <ProductItemF
                    imgpath={Imagepath_elaichi}
                    text='Sweet and aromatic green cardamom, used in desserts, teas, curries, and biryanis.'
                    alt='Green Cardamom'
                    label='Green Cardamom'
                    />
                    <ProductItemS
                    imgpath={Imagepath_turmeric}
                    text='Vibrant turmeric, renowned for its earthy flavor and powerful health benefits.'
                    alt='Turmeric'
                    label='Turmeric'
                    />
                    <ProductItemF
                    imgpath={Imagepath_hing}
                    text='Potent and aromatic, Asafoetida(hing) delivers a unique, umami-like flavor, essential in Indian cooking.'
                    alt='asafoetida'
                    label='Asafoetida'
                    />
                    <ProductItemS
                    imgpath={Imagepath_mirch}
                    text='Red Indian chilli delivers fiery heat and vibrant color to spice up any dish.'
                    alt='Red Dried Chilli '
                    label='Red Indian Chilli'
                    />
                    <ProductItemF
                    imgpath={Imagepath_mace}
                    text='Mace offers a refined, milder warmth compared to nutmeg, ideal for elevating savory and sweet recipes.'
                    alt='mace'
                    label='Mace'
                    />
                    <ProductItemS
                    imgpath={Imagepath_kaali}
                    text='Smoky and bold, ideal for stews, meat curries, and rice dishes.'
                    alt='black cardamom'
                    label='Black Cardamom'
                    />
                    <ProductItemF
                    imgpath={Imagepath_methi}
                    text='Slightly bitter with a sweet aftertaste, fenugreek is key in curries and spice blends.'
                    alt='fenugreek'
                    label='Fenugreek Seeds'
                    />
                    <ProductItemS
                    imgpath={Imagepath_sarso}
                    text='Mustard seeds add heat and complexity to pickles, curries, and sauces.'
                    alt='mustard'
                    label='Mustard Seeds'
                    />
                    <ProductItemF
                    imgpath={Imagepath_nutmeg}
                    text='Nutmeg enhances desserts, drinks, and savory dishes with its warm, slightly sweet aroma.'
                    alt='nutmeg'
                    label='Nutmeg'
                    />
                    <ProductItemS
                    imgpath={Imagepath_saunf}
                    text='Fennel delivers a sweet, licorice-like flavor, and is widely used in all types of indian pickles.'
                    alt='fennel'
                    label='Fennel Seeds'
                    />
                    <ProductItemF
                    imgpath={Imagepath_chakri}
                    text='Star anise infuses broths, soups, and baked goods with a bold, licorice-like taste.'
                    alt='star anise'
                    label='Star Anise'
                    />
                    <ProductItemS
                    imgpath={Imagepath_tej}
                    text='Bay leaves are very aromatic and subtle and add depth to slow-cooked dishes like soups, stews, and sauces.'
                    alt='bay leaf'
                    label='Bay Leaf'
                    />
                    <ProductItemF
                    imgpath={Imagepath_adrak}
                    text='Zesty and spicy, ginger adds warmth and depth to everything from curries to teas.'
                    alt='ginger'
                    label='Ginger'
                    />
                    <ProductItemS
                    imgpath={Imagepath_lassan}
                    text='Bold and pungent, garlic is a culinary staple, enhancing the flavor of countless savory dishes.'
                    alt='garlic'
                    label='Garlic'
                    />
                    <ProductItemF
                    imgpath={Imagepath_pyaaz}
                    text='Onion imparts a rich, savory flavor to dishes, forming the aromatic base for countless recipes.'
                    alt='onion'
                    label='Onion'
                    />
                </ul>                
            </div>
        </div>
    </div>
  )
}

export default ProdSection