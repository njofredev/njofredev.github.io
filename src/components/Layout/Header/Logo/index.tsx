import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <span className="font-bold text-22 md:text-26 text-midnight_text dark:text-white tracking-tight">
        njofre<span className="text-primary group-hover:scale-125 inline-block transition-transform duration-300">.</span>dev
      </span>
    </Link>
  );
};

export default Logo;
