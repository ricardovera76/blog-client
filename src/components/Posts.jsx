import { useEffect, useState, useRef } from "react";
import { usePosts } from "../hooks/usePosts.js";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  ControlPanel,
  PostsContainer,
  PostCard,
  Panel,
  Controls,
  NewPostModal,
  Modal,
  FormPost,
  ModalControls,
  FormInput,
  FormText,
  FormFile,
  FormExit,
  Button,
  ErrorMessage,
} from "../styles/Posts.js";
import { Cancel } from "@mui/icons-material";

const Posts = () => {
  const [shownPosts, setShownPosts] = useState([]);
  const [showPostPanel, setShowPostPanel] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const bodyRef = useRef();
  const titleRef = useRef();
  const { getAllPosts, createAPost } = usePosts("http://localhost:5000");

  useEffect(() => {
    const getter = async () => {
      const data = await getAllPosts();
      setShownPosts(data);
    };
    getter();
  }, [getAllPosts]);

  const newPostHandler = () => {
    setShowPostPanel(!showPostPanel);
    setErrorMsg("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await createAPost(
      titleRef.current.value,
      bodyRef.current.value,
      2
    );
    console.log(data);
    if (data?.type === "error") {
      setErrorMsg(data?.result);
      return;
    }
    setErrorMsg("");
    setShowPostPanel(false);
    console.log(data);
  };
  return (
    <Container>
      <ControlPanel>
        <Panel>
          <Controls onClick={newPostHandler}>Nuevo Foro +</Controls>
          <Controls>Mis Foros</Controls>
          <Controls>Todos Los Foros</Controls>
        </Panel>
      </ControlPanel>
      <PostsContainer>
        {shownPosts.map((item) => (
          <PostCard key={item.post_id}>
            <h3>{item?.post_title.toUpperCase()}</h3>
            <p>{item?.post_body}</p>
          </PostCard>
        ))}
      </PostsContainer>
      <AnimatePresence>
        {showPostPanel && (
          <NewPostModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorMsg !== "" && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <Modal>
              <ModalControls>
                <h3>Crear un nuevo Post</h3>
                <FormExit onClick={newPostHandler}>
                  <Cancel />
                </FormExit>
              </ModalControls>
              <FormPost onSubmit={submitHandler}>
                <label htmlFor="title">
                  <strong>Enter The Title</strong>
                </label>
                <FormInput
                  ref={titleRef}
                  id="title"
                  type="text"
                  placeholder="Enter The Title"
                />
                <label htmlFor="body">
                  <strong>Enter The Body</strong>
                </label>
                <FormText
                  ref={bodyRef}
                  id="body"
                  type="text-area"
                  placeholder="Enter The Body"
                />
                <FormFile>
                  <input
                    type="file"
                    accept="video/*,.mkv,.txt"
                    placeholder="Enter The Title"
                  />
                  Submit a file
                </FormFile>
                <Button>Submit</Button>
              </FormPost>
            </Modal>
          </NewPostModal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Posts;
