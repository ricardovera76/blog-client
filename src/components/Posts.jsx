import { useEffect, useState, useRef } from "react";
import ax from "axios";
import { usePosts } from "../hooks/usePosts.js";
import { AnimatePresence } from "framer-motion";
import * as Styles from "../styles/Posts.js";
import { logo } from "../assets/icons.js";
import { useAuth } from "../hooks/useAuth.js";
import { useWindowSize } from "../hooks/useWindowSize.js";
const endpoint = "http://localhost:5000";

const Posts = () => {
  const [user] = useAuth();
  const [shownPosts, setShownPosts] = useState([]);
  const [showPostPanel, setShowPostPanel] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPost, setSelectedPost] = useState({});
  const [showFullPost, setShowFullPost] = useState(false);
  const [filterList, setFilterList] = useState([
    { value: 0, label: "Todas las materias" },
  ]);
  const [filter, setFilter] = useState(0);
  const { createAPost } = usePosts(endpoint);
  const windowSize = useWindowSize();
  const bodyRef = useRef();
  const titleRef = useRef();
  const subjectRef = useRef();
  const vidLinkRef = useRef();
  const coverRef = useRef();

  useEffect(() => {
    ax.get(`${endpoint}/posts/all`).then(({ data }) => {
      setShownPosts(data.data);
    });
  }, [shownPosts]);

  useEffect(() => {
    ax.post(`${endpoint}/user/`, { userName: user.user_name }).then(
      ({ data }) => {
        const subjectArr =
          data.data?.user_subjects && JSON.parse(data.data.user_subjects);
        const test = filterList;
        subjectArr?.map((subj) =>
          test.push({
            value: JSON.parse(subj).subject_id,
            label: JSON.parse(subj).subject_name,
          })
        );
        setFilterList(test);
      }
    );
  }, [user, filterList]);

  const newPostHandler = () => {
    setShowPostPanel(!showPostPanel);
    setErrorMsg("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const body = bodyRef.current?.value;
    const vidLink = vidLinkRef.current?.value;
    const subjectName = subjectRef.current?.value;
    const userName = user.user_name;
    const cover = coverRef.current?.files[0];
    const condition =
      title &&
      body &&
      vidLink &&
      subjectName &&
      userName &&
      cover !== undefined;
    const value = { title, body, vidLink, subjectName, userName, cover };
    if (!condition) {
      return;
    }
    const data = await createAPost(value);
    if (data?.type === "error") {
      setErrorMsg(data?.result);
      return;
    }
    setErrorMsg("");
    setShowPostPanel(false);
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
          <Styles.Dropdown
            w={windowSize.width}
            options={filterList}
            onChange={(val) => setFilter(parseInt(val.value))}
          />
        </Styles.Panel>
      </Styles.ControlPanel>
      <Styles.PostsContainer>
        {shownPosts?.map((item) =>
          filter === 0 ? (
            <Styles.PostCard
              key={item.post_id}
              onClick={() => selectedPostHandler(item)}
            >
              <h3 onClick={() => console.log(item)}>
                {item?.post_title.toUpperCase()}
              </h3>
            </Styles.PostCard>
          ) : filter === item.post_subject_id ? (
            <Styles.PostCard
              key={item.post_id}
              onClick={() => selectedPostHandler(item)}
            >
              <h3 onClick={() => console.log(item)}>
                {item?.post_title.toUpperCase()}
              </h3>
            </Styles.PostCard>
          ) : null
        )}
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
                  ref={subjectRef}
                  id="tags"
                  type="text"
                  placeholder="Introduce el tema o materia del foro"
                />
                <Styles.FormInput
                  ref={vidLinkRef}
                  id="vid"
                  type="text"
                  placeholder="Introduce el enlace del video"
                />
                <Styles.FormText
                  ref={bodyRef}
                  id="body"
                  type="text-area"
                  placeholder="Ingresa el contenido"
                />
                <Styles.FormFile>
                  <input type="file" accept="image/*" ref={coverRef} />
                  Ingresa un archivo de imagen
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
                  {selectedPost.post_cover}
                </Styles.ModalBodyText>
                <Styles.ModalBodyAtt>
                  {selectedPost.post_body}
                </Styles.ModalBodyAtt>
                <Styles.ModalBodyAtt>
                  {selectedPost.post_vid}
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
