// src/services/nftService.js
export const fetchNfts = async () => {
    const response = await fetch('http://localhost:5000/nftCards');
    if (!response.ok) {
      throw new Error('Failed to fetch NFTs');
    }
    return response.json();
  };
  