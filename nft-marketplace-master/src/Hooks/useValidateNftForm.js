import { useState } from 'react';

export function useValidateNftForm(initialData) {
  const [nftData, setNftData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!nftData.title.trim()) newErrors.title = 'Title is required';
    if (!nftData.rank.trim()) newErrors.rank = 'Rank is required';
    if (!nftData.image.trim()) newErrors.image = 'Image URL is required';
    if (!nftData.author.trim()) newErrors.author = 'Author is required';
    if (!nftData.price_eth.trim() || isNaN(nftData.price_eth)) newErrors.price_eth = 'Price (ETH) must be a valid number';
    if (!nftData.price_usd.trim() || isNaN(nftData.price_usd)) newErrors.price_usd = 'Price (USD) must be a valid number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftData({ ...nftData, [name]: value });
  };

  return { nftData, errors, handleChange, validate };
}
