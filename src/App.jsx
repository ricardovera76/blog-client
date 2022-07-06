import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Chats from "./pages/Chats";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Navigate to="/dashboard" replace={true} />}
      />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/chats" exact element={<Chats />} />
      <Route path="/posts" exact element={<Posts />} />
      <Route path="/admin" exact element={<Admin />} />
    </Routes>
  );
};

export default App;
