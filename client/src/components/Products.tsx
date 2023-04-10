import './styles/products.css'

export default function Products () {
  return (
    <div className='products-container'>
      <div className='products'>
        <div className='product'>
          <div className='product-info'>
            <img src="./assets/Beer_3D.png" alt="Beer 3D render" />
          </div>
        </div>
        <div className='product'>
          <div className='product-info'>
          <img src="./assets/Coffee_3D.png" alt="Coffee 3D render" />
          </div>
        </div>
        <div className='product'>
          <div className='product-info'>
          <img src="./assets/Watch_3D.png" alt="Watch 3D render" />
          </div>
        </div>
      </div>
    </div>
  )
}