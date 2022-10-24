import { useEffect, useState, useRef } from "react";
import ax from "axios";
import { usePosts } from "../hooks/usePosts.js";
import { AnimatePresence } from "framer-motion";
import * as Styles from "../styles/Posts.js";
import { logo } from "../assets/icons.js";
import { useAuth } from "../hooks/useAuth.js";
const endpoint = "http://localhost:5000";

const Posts = () => {
  const [user] = useAuth();
  const [shownPosts, setShownPosts] = useState([]);
  const [showPostPanel, setShowPostPanel] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPost, setSelectedPost] = useState({});
  const [showFullPost, setShowFullPost] = useState(false);
  const { createAPost } = usePosts(endpoint);
  const bodyRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    ax.get(`${endpoint}/posts/all`).then(({ data }) => {
      setShownPosts(data.data);
    });
  }, [shownPosts]);

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

  const selectedPostHandler = (item) => {
    setSelectedPost(item);
    setShowFullPost(true);
  };

  const exitSelectedPostHandler = () => {
    setSelectedPost({});
    setShowFullPost(false);
  };

  return (
    <Styles.Container>
      <Styles.ControlPanel>
        <Styles.Panel>
          {user.user_type !== "s" && (
            <Styles.Controls onClick={newPostHandler}>
              {logo("add")}
            </Styles.Controls>
          )}
          <Styles.Controls>Dropdpwn Menu</Styles.Controls>
        </Styles.Panel>
      </Styles.ControlPanel>
      <Styles.PostsContainer>
        {shownPosts?.map((item) => (
          <Styles.PostCard
            key={item.post_id}
            onClick={() => selectedPostHandler(item)}
          >
            <h3>{item?.post_title.toUpperCase()}</h3>
          </Styles.PostCard>
        ))}
      </Styles.PostsContainer>
      <AnimatePresence>
        {showPostPanel && (
          <Styles.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorMsg !== "" && (
              <Styles.ErrorMessage>{errorMsg}</Styles.ErrorMessage>
            )}
            <Styles.Modal>
              <Styles.ModalControls>
                <h3>Crear un nuevo Post</h3>
                <Styles.FormExit onClick={newPostHandler}>
                  {logo("close")}
                </Styles.FormExit>
              </Styles.ModalControls>
              <Styles.FormPost onSubmit={submitHandler}>
                <Styles.FormInput
                  ref={titleRef}
                  id="title"
                  type="text"
                  placeholder="Ingresa un titulo"
                />
                <Styles.FormInput
                  ref={titleRef}
                  id="tags"
                  type="text"
                  placeholder="Introduce el tema o materia del foro"
                />
                <Styles.FormText
                  ref={bodyRef}
                  id="body"
                  type="text-area"
                  placeholder="Ingresa el contenido"
                />
                <Styles.FormFile>
                  <input type="file" accept="video/*,.mkv,.txt" />
                  Ingresa un archivo de video
                </Styles.FormFile>
                <Styles.Button>Submit</Styles.Button>
              </Styles.FormPost>
            </Styles.Modal>
          </Styles.Backdrop>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFullPost && (
          <Styles.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Styles.ModalFull>
              <Styles.ModalHeader>
                <h1>{selectedPost.post_title}</h1>
                <Styles.FormExit onClick={exitSelectedPostHandler}>
                  {logo("close")}
                </Styles.FormExit>
              </Styles.ModalHeader>
              <Styles.ModalBody>
                <Styles.ModalBodyText>
                  {selectedPost.post_body}
                </Styles.ModalBodyText>
                <Styles.ModalBodyAtt>
                  {selectedPost.post_body}
                </Styles.ModalBodyAtt>
              </Styles.ModalBody>
            </Styles.ModalFull>
          </Styles.Backdrop>
        )}
      </AnimatePresence>
    </Styles.Container>
  );
};

export default Posts;
