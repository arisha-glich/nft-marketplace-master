import React from 'react';
import author from '../../assets/author.png';
import { LoadingIndicator } from './LoadingIndicator';

export function NftCard({ nft, loading, onEdit, onDelete }) {
  return (
    <div className="card border border-secondary-border rounded-xl border-solid p-2 relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
          <LoadingIndicator />
        </div>
      )}
      <div>
        <img
          className="w-full max-h-[350px] object-cover"
          src={nft.image || 'placeholder-image-url'}
          alt={`${nft.title || 'NFT'} image`}
        />
      </div>
      <div className="pt-2 flex flex-col gap-1">
        <span className="text-sm text-[#A1A1AA]">{nft.title || 'Loading...'}</span>
        <h1 className="font-semibold">{nft.rank || '...'}</h1>
      </div>
      <div className="py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Author</span>
          <div className="text-sm xl:text-base flex items-center gap-1">
            <img src={author} alt="author" className="w-6 h-6 rounded-full" />
            <p>{nft.author || 'Loading...'}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Price</span>
          <div className="text-sm xl:text-base flex items-center gap-1">
            <div className="flex items-center gap-1">
              <p>{nft.price_eth || '...'}</p>
              <span>ETH</span>
            </div>
            <span className="text-[#A1A1AA] text-xs">${nft.price_usd || '...'}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <button
          onClick={() => onEdit(nft)}
          className="bg-blue-500 text-white p-1 rounded mb-1"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(nft.id)}
          className="bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
