import { BsAt } from 'react-icons/bs';

export const Description = ({ user }) => {
  //   console.log(username);
  return (
    <div className="description">
      <img src={user.avatar} alt="User avatar" className="avatar" width="240" />
      <h5>description</h5>
      <p className="name">{user.username}</p>
      <p className="tag">
        <BsAt />
        {user.tag}
      </p>
      <p className="location">{user.location}</p>
    </div>
  );
};
