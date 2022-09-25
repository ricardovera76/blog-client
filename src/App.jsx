import { Navigate, Route, Routes } from "react-router-dom";
import Chats from "./components/Chats";
import Posts from "./components/Posts";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Conference from "./components/Conference";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Navigate to="/home/dashboard" replace={true} />}
      />
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
