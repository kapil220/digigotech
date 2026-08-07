import Image from "next/image";
import logo from "@/assets/logo.jpeg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="DigiGoTech"
      width={1280}
      height={853}
      priority={false}
      className={className ?? "h-10 w-auto"}
    />
  );
}