import React, { useState } from 'react';

export function NftForm({ formData, setFormData, onClose, onSave }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFile(files[0]);
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here if needed
    onSave(); // Trigger save when form is submitted
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-200 p-6 rounded-lg">
      <div>
        <label className="block text-black">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-black">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
          readOnly
        />
      </div>
      <div>
        <label className="block text-black">Upload Image</label>
        <input
          type="file"
          name="imageFile"
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-black">Rank</label>
        <input
          type="text"
          name="rank"
          value={formData.rank || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-black">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-black">Price (ETH)</label>
        <input
          type="number"
          name="price_eth"
          value={formData.price_eth || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-black">Price (USD)</label>
        <input
          type="number"
          name="price_usd"
          value={formData.price_usd || ''}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-400 bg-white text-black"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
