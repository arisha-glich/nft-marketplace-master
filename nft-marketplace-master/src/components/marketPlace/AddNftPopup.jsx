import React from 'react';
import { useValidateNftForm } from '../../Hooks/useValidateNftForm'; // Adjust the path as needed

export function NftAddPopup({ isOpen, onClose, onSave }) {
  const initialData = {
    title: '',
    rank: '',
    image: '',
    author: '',
    price_eth: '',
    price_usd: ''
  };

  const { nftData, errors, handleChange, validate } = useValidateNftForm(initialData);

  const handleSubmit = () => {
    if (validate()) {
      onSave(nftData);
      // Reset form data if needed
      // setNftData(initialData);
      // Clear errors if needed
      // setErrors({});
    }
  };

  return (
    isOpen ? (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-black p-6 rounded-lg w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New NFT</h2>
          <div className="mb-2">
            <input
              type="text"
              name="title"
              value={nftData.title}
              onChange={handleChange}
              placeholder="Title"
              className={`p-2 border rounded w-full ${errors.title ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="rank"
              value={nftData.rank}
              onChange={handleChange}
              placeholder="Rank"
              className={`p-2 border rounded w-full ${errors.rank ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.rank && <p className="text-red-500 text-sm">{errors.rank}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="image"
              value={nftData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className={`p-2 border rounded w-full ${errors.image ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="author"
              value={nftData.author}
              onChange={handleChange}
              placeholder="Author"
              className={`p-2 border rounded w-full ${errors.author ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="price_eth"
              value={nftData.price_eth}
              onChange={handleChange}
              placeholder="Price (ETH)"
              className={`p-2 border rounded w-full ${errors.price_eth ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.price_eth && <p className="text-red-500 text-sm">{errors.price_eth}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="price_usd"
              value={nftData.price_usd}
              onChange={handleChange}
              placeholder="Price (USD)"
              className={`p-2 border rounded w-full ${errors.price_usd ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.price_usd && <p className="text-red-500 text-sm">{errors.price_usd}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
}
