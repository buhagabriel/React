import { Avatar } from "@/components/ui/avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";
import Image from "next/image";

type Props = Partial<AvatarProps> & {
  user: User | undefined;
};

function UserAvatar({ user, ...avatarProps }: Props) {
  return (
    <Avatar className="relative h-8 w-8" {...avatarProps}>
      <Image
        src={
          user?.image ||
          "https://media.istockphoto.com/id/1166184350/vector/people-icon-person-icon-user-icon-in-trendy-flat-style-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=RiIK7wUIWWDDW-qWClBeFL9OdgWD-xUYil8-gCkp7Oo="
        }
        fill
        alt={`${user?.name}'s profile picture`}
        className="rounded-full object-cover"
      />
    </Avatar>
  );
}

export default UserAvatar;