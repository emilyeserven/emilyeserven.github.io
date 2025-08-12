import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shad/ui/avatar.tsx";
import { Logo } from "@/components/ui/Logo.tsx";

interface AvatarProps {
  imgSrc?: string;
}

export function Avatar({ imgSrc }: AvatarProps) {
  return (
    <ShadAvatar className="border">
      <AvatarImage src={imgSrc} />
      <AvatarFallback>
        <Logo mode="icon" size="xs" theme="black" />
      </AvatarFallback>
    </ShadAvatar>
  );
}
