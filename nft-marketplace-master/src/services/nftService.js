export const fetchNfts = async () => {
  try {
    const response = await fetch('http://localhost:5000/nftCards');
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorDetails.message || 'Unknown error'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch NFTs Error:", error);
    throw error;
  }
};
