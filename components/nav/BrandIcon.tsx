import Image from "next/image";

const BrandIcon = () => {
  return (
    <div className="flex flex-row items-center font-normal text-2xl">
      <Image src="/logo512.png" alt="Logo" height={50} width={50} priority />
      Aeon<span className="text-primary">Timer</span>
    </div>
  );
};

export default BrandIcon;
