import PT from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  const statusClass = [s.status, isOnline && s.active].join(' ');
  return (
    <li className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PT.string.isRequired,
  name: PT.string.isRequired,
  isOnline: PT.bool.isRequired,
};
