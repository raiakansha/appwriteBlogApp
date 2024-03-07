/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conf";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-8 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="font-bold text-7xl mb-7">
                Welcome to the Blog.com
              </h1>
              <p className="text-xl tracking-wider font-medium mb-3">
                Embark on a Journey of Discovery and Inspiration with your blogs
                Where Every Word Unveils a World. Elevate Your Reading
                Experience, Connect with Passionate Writers, and Dive into a
                Universe of Ideas. Your Personal Gateway to Infinite Stories and
                Endless Imagination Awaits Start Exploring Today!
              </p>
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read & add posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
