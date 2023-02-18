import PropTypes from 'prop-types';

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

FriendsListItem.protoType = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
