import { Description } from './Description';
import { Stats } from './Stats';
export const Profile = ({ user }) => {
  console.log(user.username);
  return (
    <div className="profile">
      <h4>profile</h4>
      <Description user={user} />
      <Stats user={user} />
    </div>
  );
};

// Profile.propTypes = {
//   user: PropTypes.shape({
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired,
//   }),
// };
