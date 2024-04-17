"use client"
import React from 'react'
import Recipe from './Recipe';

interface Recipe {
  id: number;
  name: string;
}

const RecipeList: React.FC = () => {

  return (
    <div className='bg-green-400 min-h-screen p-2'>
        <Recipe food="Banana Shake" />
        <Recipe food="Masala Dosa" />
        <Recipe food="Poha" />
    </div>
  );
};

export default RecipeList;