import { Avatar, AvatarFallback, AvatarImage } from "../ui/reui/avatar";

export default function AvatarProfileDropdown() {
  return (
    <div>
      <Avatar className="icon-hover-animation-2">
        <AvatarImage src="/src/assets/user.png" alt="" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
    </div>
  );
}
