import { Image, Name } from './FriendListItem.styled';

export const FriendsListItem = ({ item: { isOnline, name, avatar } }) => {
  //   console.log(isOnline);
  return (
    <div>
      <span className="status">{isOnline}</span>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </div>
  );
};
