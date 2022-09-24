import {
  Forum,
  Home,
  PowerSettingsNew,
  School,
  VideoCameraFront,
  AdminPanelSettings,
} from "@mui/icons-material";

export const logo = (type) => {
  const icon = {
    home: () => <Home />,
    forum: () => <Forum />,
    logout: () => <PowerSettingsNew />,
    chats: () => <School />,
    conference: () => <VideoCameraFront />,
    admin: () => <AdminPanelSettings />,
  };

  return icon[type] || icon.home;
};
