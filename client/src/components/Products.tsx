import './styles/products.css'
import PhotoStack from './PhotoStack'

export default function Products(props: { mouse: { x: number, y: number } }) {

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
      <div id='products-bg'></div>
      <h2 id='product-title'>PRODUCTS</h2>
      <div className='products'>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Beer_3D.png" alt="Beer 3D render" />
          </div>
          <PhotoStack photoURLS={BeerUrls} mouse={props.mouse} />
        </div>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Coffee_3D.png" alt="Coffee 3D render" />
          </div>
          <PhotoStack photoURLS={CoffeeUrls} mouse={props.mouse} />
        </div>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Watch_3D.png" alt="Watch 3D render" />
          </div>
          <PhotoStack photoURLS={WatchUrls} mouse={props.mouse} />
        </div>
      </div>
      <div id="quote-container">
        <span id="quote-product">
          Every passion can yield some sort of compensation.
        </span>
        <div id='hr-perso'></div>
        <span id="quote-product2">
          So why not make a living out of it?
        </span>
      </div>
    </div>
  )
}