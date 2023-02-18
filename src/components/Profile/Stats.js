import PropTypes from 'prop-types';

import { LikesList, Label, Quantity, ViewsList } from './Stats.styled';

export const Stats = ({ followers, views, likes }) => {
  return (
    <LikesList>
      <ViewsList>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </ViewsList>
      <ViewsList>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </ViewsList>
      <ViewsList>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </ViewsList>
    </LikesList>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

// export const Stats = ({ followers, views, likes }) => {
//   return (
//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">{followers}</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">{views}</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">{likes}</span>
//       </li>
//     </ul>
//   );
// };

// Stats.propTypes = {
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };
