"use client"
import React, { useState } from 'react';
import Item from './Item';
import AddItemModal from './AddItemModal';

interface Item {
  id: number;
  name: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addItem = (itemName: string) => {
    setItems([...items, { id: items.length, name: itemName }]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-red-400 min-h-screen p-2">
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </div>
      <div>
        {items.map((item) => (
          <Item key={item.id} itemName={item.name} />
        ))}
      </div>

      {isModalOpen && <AddItemModal addItem={addItem} />}
    </div>
  );
};

export default ItemList;