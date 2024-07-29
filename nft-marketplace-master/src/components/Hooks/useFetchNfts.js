// src/components/NftSection/index.js
import React from 'react';
import { useFetchNfts } from '../../hooks/useFetchNfts';
import author from '../../assets/author.png';

export function NftSection() {
  const { nfts, loading, error } = useFetchNfts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (nfts.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8">
      {nfts.map((nft) => (
        <NftCard key={nft.rank} nft={nft} />
      ))}
    </div>
  );
}

function NftCard({ nft }) {
  return (
    <div className="card border border-secondary-border rounded-xl border-solid p-2">
      <div>
        <img className="w-full max-h-[350px]" src={nft.image} alt="nft" />
      </div>
      <div className="pt-2 flex flex-col gap-1">
        <span className="text-sm text-[#A1A1AA]">{nft.title}</span>
        <h1>{nft.rank}</h1>
      </div>
      <div className="py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Author</span>
          <div className="text-sm xl:text-base flex gap-1">
            <img src={author} alt="author" />
            <p>{nft.author}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Price</span>
          <div className="text-sm xl:text-base flex gap-1 items-center">
            <div className="flex gap-1">
              <p>{nft.price_eth}</p>
              <span>ETH</span>
            </div>
            <span className="text-[#A1A1AA] text-xs">${nft.price_usd}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
