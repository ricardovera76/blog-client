import { useEffect, useState } from "react";
import {
  CardContainer,
  CarouselContainer,
  Chats,
  ChatsContainer,
  Container,
  Main,
  ChatsGrid,
} from "../styles/Dashboard";
import Carousel from "react-grid-carousel";
import { usePosts } from "../hooks/usePosts";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const { getDashboardPosts } = usePosts("http://localhost:5000");
  useEffect(() => {
    const getter = async () => {
      const data = await getDashboardPosts();
      setPosts(data || []);
    };
    getter();
  }, [getDashboardPosts]);

  const chats = [
    { name: "Fisica", since: "2022" },
    { name: "Quimica", since: "2022" },
    { name: "Matematica", since: "2022" },
    { name: "Biologia", since: "2022" },
  ];

  return (
    <Container>
      <Main>
        <h2>Ultimos Foros</h2>
        <CarouselContainer>
          <Carousel cols={2} loop scrollSnap containerStyle={{ width: "100%" }}>
            {posts.map((post) => (
              <Carousel.Item key={post.post_id}>
                <CardContainer>
                  <h4>{post?.post_title}</h4>
                  <p>{post?.post_body}</p>
                  <p>{post?.post_user_id}</p>
                </CardContainer>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselContainer>
      </Main>
      <div>
        <ChatsContainer>
          <h2>Mis Ultimos Chats</h2>
          <ChatsGrid>
            {chats.map((chat) => (
              <Chats key={chat.name + chat.since}>
                <h4>{chat.name}</h4>
                <p>{chat.since}</p>
              </Chats>
            ))}
          </ChatsGrid>
        </ChatsContainer>
      </div>
    </Container>
  );
};

export default Dashboard;
