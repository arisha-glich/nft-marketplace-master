import React, { useState } from 'react';
import { useFetchNfts } from '../../Hooks/useFetchNfts';
import { NftAddPopup } from './AddNftPopup'; // Ensure this is the correct path
import { EditNftPopup } from './EditNftPopup'; // Ensure this is the correct path
import { NftCard } from './NftCard';
import { LoadingIndicator } from './LoadingIndicator';
import NoDataMessage from './NoDataMessage';

const gridClasses = "grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8";

export function NftSection() {
  const { nfts, loading, error, refetch, editNft, deleteNft } = useFetchNfts();
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [currentNft, setCurrentNft] = useState(null);

  const handleAddNft = () => {
    setCurrentNft(null); // Ensure no current NFT is set when adding a new one
    setAddPopupOpen(true);
  };

  const handleEditNft = (nft) => {
    setCurrentNft(nft); // Set the NFT data for editing
    setEditPopupOpen(true);
  };

  const handleClosePopup = () => {
    setAddPopupOpen(false);
    setEditPopupOpen(false);
  };

  const handleSaveAddNft = async (newNft) => {
    try {
      await fetch('http://localhost:5000/nftCards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNft),
      });
      refetch();
      handleClosePopup();
    } catch (error) {
      console.error('Failed to save NFT:', error);
    }
  };

  const handleSaveEditNft = async (updatedNft) => {
    try {
      await editNft(updatedNft.id, updatedNft);
      refetch();
      handleClosePopup();
    } catch (error) {
      console.error('Failed to save NFT:', error);
    }
  };

  const handleDeleteNft = async (id) => {
    try {
      await deleteNft(id);
      refetch();
    } catch (error) {
      console.error('Failed to delete NFT:', error);
    }
  };

  const nftCount = nfts.length;

  if (loading) {
    const placeholders = Array(nftCount || 4).fill(null);
    return (
      <div className={gridClasses}>
        {placeholders.map((_, index) => (
          <div key={index} className="w-full h-[450px] bg-gray-200 rounded-xl flex justify-center items-center">
            <LoadingIndicator />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 text-center">
        <p className="text-red-600">Error fetching NFTs. Please try again.</p>
      </div>
    );
  }

  if (nftCount === 0) {
    return <NoDataMessage />;
  }

  return (
    <div>
      <button
        onClick={handleAddNft}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add NFT
      </button>
      <div className={gridClasses}>
        {nfts.map((nft) => (
          <NftCard
            key={nft.id}
            nft={nft}
            loading={loading}
            onEdit={() => handleEditNft(nft)}
            onDelete={() => handleDeleteNft(nft.id)}
          />
        ))}
      </div>
      <NftAddPopup
        isOpen={isAddPopupOpen}
        onClose={handleClosePopup}
        onSave={handleSaveAddNft}
      />
      {currentNft && (
        <EditNftPopup
          isOpen={isEditPopupOpen}
          onClose={handleClosePopup}
          onSave={handleSaveEditNft}
          formData={currentNft}
        />
      )}
    </div>
  );
}
