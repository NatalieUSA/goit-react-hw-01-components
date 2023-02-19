import PropTypes from 'prop-types';

import { Container, Image, Name } from './FriendListItem.styled';
import { BsFillCircleFill } from 'react-icons/bs';

export const FriendsListItem = ({ item: { isOnline, name, avatar } }) => {
  //   console.log(isOnline);
  return (
    <Container>
      <BsFillCircleFill
        style={{ color: isOnline ? 'yellowgreen' : 'tomato' }}
      ></BsFillCircleFill>

      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Container>
  );
};

FriendsListItem.protoType = {
  item: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
