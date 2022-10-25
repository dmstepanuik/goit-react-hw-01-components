import PT from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PT.arrayOf(
    PT.shape({
      id: PT.number.isRequired,
      ...FriendListItem.propTypes,
    }).isRequired
  ),
};
