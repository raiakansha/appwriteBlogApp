/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Link to={`/post/${$id}`}>
      {isLoading && (
        <div className="w-full animate-pulse h-72 bg-gray-300 rounded-xl p-4 ">
          <div className="w-full justify-center mb-4">
            <img src="" alt="" className="rounded-xl" />
          </div>
          <h2 className="text-xl font-bold"></h2>
        </div>
      )}

      {!isLoading && (
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )}
    </Link>
  );
}

export default PostCard;
