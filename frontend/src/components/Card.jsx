import { IoAdd } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import useStore from "../lib/store";

const ProductCard = ({ name, price, des, image, id }) => {
  const {addToTempOrder,cart,remove} = useStore();

    return (
    <>
      <div className='max-h-[300px] p-2 h-[300px] flex flex-col justify-center max-w-[250px] border-2 border-solid border-black hover:shadow-2xl hover:scale-105 hover:shadow-slate-950 mb-6 transition duration-600 shadow-lg rounded-md'>
        <div className='h-[180px] w-full'>
          <img className='rounded-xl object-cover border-2 border-black' src={`/src/assets${image}`} alt='' style={{ height: '100%', width: '100%' }} />
        </div>
        <h2 className='text-xl font-bold text-center'>{name}</h2>
        <div className='flex text-center gap-2 justify-evenly'>
          <p className='font-semibold  w-20 rounded m-auto'>${price}</p>
        </div>
        <div className='flex justify-around py-2    rounded-xl'>
          
            <>
              <button onClick={() => {addToTempOrder(id);console.log(cart) }} className='bg-green-500  rounded-full p-2 px-[15px]'><IoAdd /></button>
              <button  onClick={()=>{ remove(id);console.log(cart)}}  className='bg-red-500  rounded-full p-2  px-[15px]'><IoIosRemove /></button>
            </>
           
        </div>
      </div>
    </>
  );
};

export default ProductCard;