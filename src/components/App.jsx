import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import statisticData from '../data/data.json';
import friendData from '../data/friends.json';
import transactionHistoryData from '../data/transactions.json';

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
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionHistoryData} />
    </div>
  );
};
