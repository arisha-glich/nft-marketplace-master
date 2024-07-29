import { useState, useEffect } from 'react';
import { fetchNfts } from '../services/nftService';

export const useFetchNfts = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNfts = async () => {
      setLoading(true);
      try {
        const data = await fetchNfts();
        setNfts(data);
      } catch (error) {
        console.error("Failed to fetch NFTs:", error);
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    getNfts();
  }, []);

  return { nfts, loading, error };
};
