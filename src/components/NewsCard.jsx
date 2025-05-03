import React from 'react';

import { FaEye, FaStar } from "react-icons/fa";
import { BsShareFill, BsBookmarkFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    
  } = news;

  return (
    <div className="card bg-base-100 shadow-sm  rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <BsBookmarkFill className="cursor-pointer" />
          <BsShareFill className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <img src={thumbnail_url} alt={title} className="w-full rounded-md" />
        <p className="text-sm text-accent">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">Read More</span>
            </>
          ) : details}
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-base-300 flex justify-between items-center text-sm text-gray-600">
      <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
