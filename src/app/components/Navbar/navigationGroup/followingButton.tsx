import Link from "next/link";
const FollowingButton = () => {
  return (
    <Link href={"/following"} className="text-white">
      Following
    </Link>
  );
};

export default FollowingButton;
