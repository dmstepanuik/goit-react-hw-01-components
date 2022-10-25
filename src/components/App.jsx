import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from '../data/user.json';
import statisticData from '../data/data.json';
import s from './App.module.css';

const { username, tag, location, avatar, stats } = userData;
export const App = () => {
  return (
    <div className={s.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'upload stats'} stats={statisticData} />
    </div>
  );
};
