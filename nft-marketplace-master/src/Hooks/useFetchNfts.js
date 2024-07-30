import { useState, useEffect } from 'react'; // Import useState and useEffect from React
import { fetchNfts, editNft, deleteNft } from '../services/nftService'; // Adjust the path as needed

export function useFetchNfts() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchNfts();
      setNfts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditNft = async (id, nftData) => {
    try {
      await editNft(id, nftData);
      fetchData(); // Refresh the data
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteNft = async (id) => {
    try {
      await deleteNft(id);
      fetchData(); // Refresh the data
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    nfts,
    loading,
    error,
    refetch: fetchData,
    editNft: handleEditNft,
    deleteNft: handleDeleteNft
  };
}
