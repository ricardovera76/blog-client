import { Navigate, Route, Routes } from "react-router-dom";
import Chats from "./pages/Chats";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Conference from "./pages/Conference";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" exact element={<Home />}>
        <Route path="chats" exact element={<Chats />} />
        <Route path="posts" exact element={<Posts />} />
        <Route path="dashboard" exact element={<Dashboard />} />
        <Route path="conference" exact element={<Conference />} />
      </Route>
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  );
};

export default App;
