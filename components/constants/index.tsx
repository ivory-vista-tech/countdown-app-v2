import {
  AccessTime,
  AutoAwesome,
  Home,
  HourglassTop,
  StickyNote2,
} from "@mui/icons-material";

export const getIcon = (name: string, className?: string) => {
  let icon;

  switch (name) {
    case "Home":
      icon = <Home className={className} />;
      break;

    case "AutoAwesome":
      icon = <AutoAwesome className={className} />;
      break;

    case "HourglassTop":
      icon = <HourglassTop className={className} />;
      break;

    case "AccessTime":
      icon = <AccessTime className={className} />;
      break;

    case "StickyNote2":
      icon = <StickyNote2 className={className} />;
      break;

    default:
      icon = <Home className={className} />;
      break;
  }

  return icon;
};

export const sidebarLinks = [
  {
    imgURL: "Home",
    route: "home",
    label: "Home",
  },
  {
    imgURL: "AutoAwesome",
    route: "auto-pilot",
    label: "Auto Pilot",
  },
  {
    imgURL: "HourglassTop",
    route: "countdown",
    label: "Countdown",
  },
  {
    imgURL: "AccessTime",
    route: "time",
    label: "Time",
  },
  {
    imgURL: "StickyNote2",
    route: "message",
    label: "Message",
  },
];

export const features = [
  {
    icon: "AutoAwesome",
    title: "Auto Pilot",
    description: "Schedule an event",
    className: "bg-orange-1",
    link: "auto-pilot",
  },
  {
    icon: "HourglassTop",
    title: "Countdown",
    description: "Set a countdown",
    className: "bg-blue-1",
    link: "countdown",
  },
  {
    icon: "AccessTime",
    title: "Time",
    description: "Display current time",
    className: "bg-purple-1",
    link: "time",
  },
  {
    icon: "StickyNote2",
    title: "Message",
    description: "Display a message",
    className: "bg-yellow-1",
    link: "message",
  },
];
