import { cn } from "@/lib/utils";

const Block = ({ size = "100" }) => {
  return (
    <div
      className={cn({
        "h-[100px]": size === "100",
        "h-screen": size === "full",
      })}
    />
  );
};

export default Block;
