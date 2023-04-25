import '../styles/products.css'
import PhotoStack from '../PhotoStack'
import MouseContext from '../../contexts/MouseContext'
import { useContext } from 'react'

export default function Products() {

  const { mouse } = useContext(MouseContext)

  const CoffeeUrls = [
    "https://drive.google.com/uc?id=1z_uWPzP8KZwfuoapa8pl23jYf2ITwzUn",
    "https://drive.google.com/uc?id=1YC4VL3eSXc3XP5p8QuNMibLa4Cd81UMx",
    "https://drive.google.com/uc?id=1p4dQPmT7BIjJDw8NtROd5gFQOL_Ug7q2"
  ]

  const BeerUrls = [
    "https://drive.google.com/uc?id=1CrxiUV3vYf3PWGMVvZZWm-mZ-8D3GT8h",
    "https://drive.google.com/uc?id=1SpQU7zsc_hy-Ib9IwYpi3sWzmz86uO-_",
    "https://drive.google.com/uc?id=1FcehwuQPz6DRNwa5n194D1y_pGofgEoB"
  ]

  const WatchUrls = [
    "https://drive.google.com/uc?id=1hsKNqdhgQu-CHsBLUbXV3KrSnIWnFiX3",
    "https://drive.google.com/uc?id=1CyOpKwvf-AAO4Dmfme_IYANdxxbwNX-o",
    "https://drive.google.com/uc?id=1yO9zYEb39tYHw_hq_Ekcvwo-72oejmQb"
  ]

  return (
    <div className='products-container'>
      <h2 id='product-title'>PRODUCTS</h2>
      <div className='products'>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Beer_3D.png" alt="Beer 3D render" />
          </div>
          <PhotoStack photoURLS={BeerUrls} mouse={mouse} />
        </div>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Coffee_3D.png" alt="Coffee 3D render" />
          </div>
          <PhotoStack photoURLS={CoffeeUrls} mouse={mouse} />
        </div>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Watch_3D.png" alt="Watch 3D render" />
          </div>
          <PhotoStack photoURLS={WatchUrls} mouse={mouse} />
        </div>
      </div>
    </div>
  )
}