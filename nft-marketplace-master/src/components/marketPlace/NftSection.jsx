import React from 'react';
import { useFetchNfts } from '../../Hooks/useFetchNfts';
import author from '../../assets/author.png';
import { LoadingIndicator } from './LoadingIndicator';
import NoDataMessage from './NoDataMessage';

const gridClasses = "grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8";

export function NftSection() {
  const { nfts, loading, error } = useFetchNfts();
  const nftCount = nfts.lenght

  if (loading) {
    const placeholders = Array(nftCount || 4).fill({});//f not get
    return (
      <div className={gridClasses}>
        {placeholders.map((_, index) => (
          <NftCard key={index} nft={{}} loading={true} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={gridClasses}>
        <div className="col-span-full text-center text-red-500">
          Error: Failed to fetch data. {error}
        </div>
      </div>
    );
  }

  if (nfts.length === 0) {
    const placeholders = Array(nftCount || 4).fill({});//f not get
    return (
      <div className={gridClasses}>
        {placeholders.map((_, index) => (
          <>
          <NftCard key={index} nft={{}} loading={true} />
          <NoDataMessage/></>
        ))}
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {nfts.map((nft) => (
        <NftCard key={nft.rank} nft={nft} />
      ))}
    </div>
  );
}

function NftCard({ nft, loading }) {
  return (
    <div className="card border border-secondary-border rounded-xl border-solid p-2 relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
          <LoadingIndicator />
        </div>
      )}
      <div>
        <img className="w-full max-h-[350px]" src={nft.image || 'placeholder-image-url'} alt={`${nft.title || 'NFT'} image`} />
      </div>
      <div className="pt-2 flex flex-col gap-1">
        <span className="text-sm text-[#A1A1AA]">{nft.title || 'Loading...'}</span>
        <h1>{nft.rank || '...'}</h1>
      </div>
      <div className="py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Author</span>
          <div className="text-sm xl:text-base flex gap-1">
            <img src={author} alt="author" />
            <p>{nft.author || 'Loading...'}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Price</span>
          <div className="text-sm xl:text-base flex gap-1 items-center">
            <div className="flex gap-1">
              <p>{nft.price_eth || '...'}</p>
              <span>ETH</span>
            </div>
            <span className="text-[#A1A1AA] text-xs">${nft.price_usd || '...'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
