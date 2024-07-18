"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
};

const handleTagClick = async () => {
  // TODO: Handle tag click by sending the user to all the tag reletad posts
};
const handleProfileClick = async () => {
  // TODO: Handle profile click by sending the user to another user profile
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => { 
    // TODO: implement search engine for tags or usernames
  }; 

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();

      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed