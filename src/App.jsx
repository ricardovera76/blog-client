import { Navigate, Route, Routes } from "react-router-dom";
import Chats from "./components/Chats";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Conference from "./components/Conference";
import Auth from "./components/Auth";

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
      <Route path="/auth" exact element={<Auth />} />
      <Route
        path="*"
        element={<Navigate to="/home/dashboard" />}
        replace={true}
      />
    </Routes>
  );
};

export default App;
