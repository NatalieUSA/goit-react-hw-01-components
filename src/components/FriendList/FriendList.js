import PropTypes from 'prop-types';

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

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
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
