import { useState } from 'react';

export function useValidateNftForm(initialData) {
  const [nftData, setNftData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!nftData.title) newErrors.title = 'Title is required';
    if (!nftData.rank) newErrors.rank = 'Rank is required';
    if (!nftData.image) newErrors.image = 'Image URL is required';
    if (!nftData.author) newErrors.author = 'Author is required';
    if (!nftData.price_eth) newErrors.price_eth = 'Price in ETH is required';
    if (!nftData.price_usd) newErrors.price_usd = 'Price in USD is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftData((prevData) => ({ ...prevData, [name]: value }));
  };

  return { nftData, errors, handleChange, validate, setNftData, setErrors };
}
