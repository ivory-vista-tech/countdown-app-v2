import {
  AccessTime,
  AutoAwesome,
  Home,
  HourglassTop,
  StickyNote2,
} from "@mui/icons-material";

export const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case "Home":
      icon = <Home />;
      break;

    case "AutoAwesome":
      icon = <AutoAwesome />;
      break;

    case "HourglassTop":
      icon = <HourglassTop />;
      break;

    case "AccessTime":
      icon = <AccessTime />;
      break;

    case "StickyNote2":
      icon = <StickyNote2 />;
      break;

    default:
      icon = <Home />;
      break;
  }

  return icon;
};

export const sidebarLinks = [
  {
    imgURL: "Home",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "AutoAwesome",
    route: "/auto-pilot",
    label: "Auto Pilot",
  },
  {
    imgURL: "HourglassTop",
    route: "/countdown",
    label: "Countdown",
  },
  {
    imgURL: "AccessTime",
    route: "/time",
    label: "Time",
  },
  {
    imgURL: "StickyNote2",
    route: "/message",
    label: "Message",
  },
];
