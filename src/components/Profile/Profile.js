import PropTypes from 'prop-types';

import { Stats } from './Stats';
import { BsAt } from 'react-icons/bs';

import {
  ProfileStyle,
  Description,
  Image,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileStyle>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>
          <BsAt />
          {tag}
        </Tag>
        <Location>{location}</Location>
      </Description>

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileStyle>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// export const Profile = ({ avatar, username, tag, location, stats }) => {
//   return (
//     <ProfileStyle>
//       <div className="description">
//         <img src={avatar} alt="User avatar" className="avatar" />
//         <p className="name">{username}</p>
//         <p className="tag">
//           <BsAt />
//           {tag}
//         </p>
//         <p className="location">{location}</p>
//       </div>

//       <Stats
//         followers={stats.followers}
//         views={stats.views}
//         likes={stats.likes}
//       />
//     </ProfileStyle>
//   );
// };
