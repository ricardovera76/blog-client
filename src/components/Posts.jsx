import React from "react";
import { Container, ControlPanel, PostsContainer } from "../styles/Posts.js";

const Posts = () => {
  const a = [];
  for (let i = 0; i <= 1000; i++) {
    a.push({ title: `title ${i}`, body: `lorem ipsum #${i}` });
  }
  return (
    <Container>
      <ControlPanel>Controles</ControlPanel>
      <PostsContainer>
        {a.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </PostsContainer>
    </Container>
  );
};

export default Posts;
