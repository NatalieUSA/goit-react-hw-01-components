import { FriendsListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  //   console.log(friends.id);
  return (
    <ul className="friendList">
      {friends.map(friend => {
        // console.log(friend);
        return (
          <li className="item" key={friend.id}>
            <FriendsListItem item={friend} />
          </li>
        );
      })}
      FriendList
    </ul>
  );
};
