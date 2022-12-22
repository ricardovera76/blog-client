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
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [, subjects] = useAuth(); // set this to dynamic
  const { getDashboardPosts } = usePosts("http://localhost:5000");
  useEffect(() => {
    const getter = async () => {
      const response = await getDashboardPosts();
      setPosts(response.data || []);
    };
    getter();
  }, [getDashboardPosts]);
  return (
    <Container>
      <Main>
        <h2>Ultimos Foros</h2>
        <CarouselContainer>
          <Carousel cols={2} loop scrollSnap containerStyle={{ width: "100%" }}>
            {posts?.map((post) => (
              <Carousel.Item key={post.post_id}>
                <CardContainer>
                  <h4>{post?.post_title}</h4>
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
            {subjects.length !== 0 && subjects?.map((subject, index) => (

              <Chats key={index}>
                <h4>{subject.subject_name}</h4>
              </Chats>
            ))}
          </ChatsGrid>
        </ChatsContainer>
      </div>
    </Container>
  );
};

export default Dashboard;
