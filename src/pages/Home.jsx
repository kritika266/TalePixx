import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Background, Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        const activePosts = posts.documents.filter(
          (post) => post.status === "active"
        );
        setPosts(activePosts);
        // setPosts(posts.documents);
      }
    });
  }, []);

  // Define the background gradient style
  // const background = {
  //   backgroundImage:
  //     "linear-gradient(to bottom, #060161, #75005d, #af2552, #d1644b, #e1a157, #e6b465, #ebc776, #f0d988, #f6c883, #f7b883, #f5a986, #ee9b8b)",
  // };

  if (posts.length === 0) {
    return (
      <div className="w-full h-dvh mt-1 py-8 text-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="p-2">
              <h1 className="text-4xl font-bold hover:text-gray-500 font-serif">
                Welcome to TalePix
              </h1>
              <p className="text-lg font-semibold mt-4 ">
                Transform your memories into digital treasures. Capture, create,
                and cherish every moment, beautifully preserved.
              </p>
            </div>
            <div className="p-2 mt-2 ">
              <img
                className="cam object-bottom-center"
                src="/news.png"
                alt="camera"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 ">
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
