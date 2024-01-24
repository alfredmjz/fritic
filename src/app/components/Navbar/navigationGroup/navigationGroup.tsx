import DiscoverButton from "./discoverButton";
import FollowingButton from "./followingButton";
import BookmarkButton from "./bookmarkButton";
import ProfileButton from "./profileButton";
const NavigationGroup = () => {
  return (
    <div className="flex w-fit gap-8 justify-center items-center">
      <DiscoverButton />
      <FollowingButton />
      <BookmarkButton />
      <ProfileButton />
    </div>
  );
};

export default NavigationGroup;
