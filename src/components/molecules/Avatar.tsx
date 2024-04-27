import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from "@/components/atoms/avatar";
import { AvatarImageProps } from "@radix-ui/react-avatar";
import { FC } from "react";

interface Props extends AvatarImageProps {
  fallback: string;
}

const Avatar: FC<Props> = ({ fallback, ...props }) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarContainer>
  );
};

export default Avatar;
