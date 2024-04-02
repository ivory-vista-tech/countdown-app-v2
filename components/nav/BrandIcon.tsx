import Link from "next/link";
import Image from "next/image";

const BrandIcon = () => {
  return (
    <Link href="/" className="flex flex-row items-center font-normal text-2xl">
      <Image src="/logo512.png" alt="Logo" height={50} width={50} priority />
      Aeon<span className="text-primary">Timer</span>
    </Link>
  );
};

export default BrandIcon;
