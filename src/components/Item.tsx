import React from 'react';

interface ItemProps {
  itemName: string;
}

const Item: React.FC<ItemProps> = ({ itemName }) => {
  return (
    <div className="bg-gray-200 p-8 m-2">
      <p>{itemName}</p>
    </div>
  );
};

export default Item;
