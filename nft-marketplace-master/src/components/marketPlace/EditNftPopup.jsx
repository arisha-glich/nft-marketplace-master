import React, { useState, useEffect } from 'react';
import { useValidateNftForm } from '../../Hooks/useValidateNftForm'; // Adjust the path as needed

export function EditNftPopup({ isOpen, onClose, onSave, formData }) {
  const [localNftData, setLocalNftData] = useState(formData);

  const { errors, validate } = useValidateNftForm(localNftData);

  useEffect(() => {
    setLocalNftData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalNftData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLocalNftData(prevData => ({ ...prevData, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      onSave(localNftData);
    }
  };

  return (
    isOpen ? (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4 text-black">Edit NFT</h2>
          <div className="mb-2">
            <input
              type="text"
              name="title"
              value={localNftData.title}
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
              value={localNftData.rank}
              onChange={handleChange}
              placeholder="Rank"
              className={`p-2 border rounded w-full ${errors.rank ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.rank && <p className="text-red-500 text-sm">{errors.rank}</p>}
          </div>
          <div className="mb-2">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className={`p-2 border rounded w-full ${errors.image ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="author"
              value={localNftData.author}
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
              value={localNftData.price_eth}
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
              value={localNftData.price_usd}
              onChange={handleChange}
              placeholder="Price (USD)"
              className={`p-2 border rounded w-full ${errors.price_usd ? 'border-red-500' : 'border-gray-300'} text-black`}
            />
            {errors.price_usd && <p className="text-red-500 text-sm">{errors.price_usd}</p>}
          </div>
          <div className="flex justify-end gap-2 mt-4">
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
