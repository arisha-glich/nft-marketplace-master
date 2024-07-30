// src/services/nftService.js

export const fetchNfts = async () => {
  const response = await fetch('http://localhost:5000/nftCards');
  if (!response.ok) {
    throw new Error('Failed to fetch NFTs');
  }
  return response.json();
};

export async function editNft(id, nftData) {
  const response = await fetch(`http://localhost:5000/nftCards/${id}`, {
    method: 'PUT', // or 'PATCH' depending on your API
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nftData),
  });

  if (!response.ok) {
    throw new Error(`Failed to edit NFT: ${response.statusText}`);
  }

  return response.json();
}

export const deleteNft = async (id) => {
  const response = await fetch(`http://localhost:5000/nftCards/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete NFT');
  }
  return response.json();
};
