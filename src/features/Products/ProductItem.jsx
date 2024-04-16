
import Rating from './../../Components/Rating';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utilities/helpres'
import { trimTitle } from '../../utilities/helpres'
import { FaShoppingCart } from 'react-icons/fa';
import { addProductToCart } from '../../Services/cartApi';
import useAddProduct from '../cart/useAddProduct';
import Button from '../../Components/Button';
// import useAddProduct from './../cart/useAddProduct';

export default function ProductItem({ product, className = '' }) {

  const { title, description, quantity, price, imageCover, category: { name }, ratingsAverage, _id } = product
  const { data, addProduct, status } = useAddProduct()

  const isLoading = status === "pending"
  console.log(status);




  return (
    <div className={`"rounded-t-md shadow-md border " + ${className}`} >
      <Link to={`/products/productinfo/${_id}`}>
        <div className="image-container relative group cursor-pointer">
          <p className='absolute bottom-0 text-center w-full bg-black  rounded-md h-0 opacity-0 text-white z-10 group-hover:opacity-100 group-hover:h-8 flex items-center justify-center transition-all duration-300'>Show Details</p>
          <img src={imageCover} className=' h-56 w-full  rounded-md object-cover object-center group-has-[img]:hover:bg-blend-normal group-has-[img]:hover:blur-sm  transition-all duration-150' alt="" />
          <i className='absolute -bottom-4 right-3 text-xl bg-white p-2 rounded-2xl z-10'><FaShoppingCart /></i>
        </div>
      </Link>

      <div className='p-4 pb-2 '>
        <h3 className='text-red-900'>{trimTitle(title)}</h3>

        <div className='flex justify-between items-center  '>
          <p className='text-sm text-red-400'>{formatPrice(price)}</p>
          <Rating rating={ratingsAverage} />
        </div>

        <Button isLoading={isLoading} onclick={() => { addProduct(_id) }} textContent={"Add To Cart"} styles={'w-full  '} />
      </div>

    </div >


  )
}