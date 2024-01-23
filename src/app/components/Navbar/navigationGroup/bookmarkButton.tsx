import Link from "next/link";
import BookmarkIcon from "@/public/tsx/bookmarkIcon";
const BookmarkButton = () => {
  return (
    <Link href={"/bookmark"}>
      <BookmarkIcon />
    </Link>
  );
};

export default BookmarkButton;
