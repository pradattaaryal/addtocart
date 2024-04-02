import React from 'react';
import useStore from "../lib/store";  
 const Cart = () => {
  const { data, cart } = useStore();  
  return (
    <div className='w-full h-screen'>
      {data.map((item, index) => {
        if (cart[item.id]) {
          return (
            <div key={index} className='max-h-[300px] p-2 h-[300px] flex flex-col justify-center max-w-[250px] border-2 border-solid border-black hover:shadow-2xl hover:scale-105 hover:shadow-slate-950 mb-6 transition duration-600 shadow-lg rounded-md'>
              <div className='h-[180px] w-full'>
                <img className='rounded-xl object-cover border-2 border-black' src={`/src/assets${item.image}`} alt={item.name} style={{ height: '100%', width: '100%' }} />
              </div>
              <h2 className='text-xl font-bold text-center'>{item.name}</h2>
              <div className='flex text-center gap-2 justify-evenly'>
                <p className='font-semibold w-20 rounded m-auto'>${item.price}</p>
                <p className='font-semibold w-20 rounded m-auto'>Count: {cart[item.id]}</p> {/* Display count of item */}

               </div>
            </div>
          );
        }
        return null; // Return null if item is not in the cart
      })}
    </div>
  );
};

export default Cart;
