import PT from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={s.tr} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  items: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      type: PT.string.isRequired,
      amount: PT.number.isRequired,
      currency: PT.string.isRequired,
    }).isRequired
  ),
};
