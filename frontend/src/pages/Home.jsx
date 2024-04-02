import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Assuming Card component is defined properly
import useStore from "../lib/store";

const Home = () => {
   const { data, setData } = useStore(); // Destructure setData from the store

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     
        <div className='h-screen  w-full flex justify-center items-center p-10'>
          <div className='m-auto grid grid-cols-1 w-[1200px]  sm:grid-cols-2  md:grid-cols-3     pt-24'> {data.map((item,index) => ( <Card key={index}  {...item} /> ))}</div>
       
        </div>
     
    </>
  );
};

export default Home;
