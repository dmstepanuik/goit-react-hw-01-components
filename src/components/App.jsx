import Profile from './Profile/Profile';
import userdata from '../data/user.json';
const { username, tag, location, avatar, stats } = userdata;
export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};
