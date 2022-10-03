import {
  Forum,
  Home,
  PowerSettingsNew,
  Chat,
  VideoCameraFront,
  AdminPanelSettings,
  Cancel,
  Menu,
  Send,
} from "@mui/icons-material";

export const logo = (type) => {
  const icon = {
    home: <Home />,
    forum: <Forum />,
    logout: <PowerSettingsNew />,
    chats: <Chat />,
    conference: <VideoCameraFront />,
    admin: <AdminPanelSettings />,
    close: <Cancel />,
    menu: <Menu />,
    send: <Send />,
  };

  return icon[type] || icon.home;
};
