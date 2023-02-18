import { FriendsListItem } from './FriendListItem';

import { List, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <FriendsListItem item={friend} />
          </Item>
        );
      })}
    </List>
  );
};

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className="friendList">
//       {friends.map(friend => {
//         return (
//           <li className="item" key={friend.id}>
//             <FriendsListItem item={friend} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
