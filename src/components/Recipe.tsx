import React from 'react';

interface RecipeProps {
  food: string;
}

const Recipe: React.FC<RecipeProps> = ({ food }) => {
  return (
    <div className="bg-blue-200 p-8 m-2 ">
      <p>{food}</p>
    </div>
  );
};

export default Recipe;