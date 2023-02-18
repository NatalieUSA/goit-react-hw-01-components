import PropTypes from 'prop-types';

import { Table, Header, Title, TitleItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  //   console.log(items);
  return (
    <Table>
      <Header>
        <Title>
          <TitleItem>Type</TitleItem>
          <TitleItem>Amount</TitleItem>
          <TitleItem>Currency</TitleItem>
        </Title>
      </Header>
      {items.map(item => {
        return (
          <tbody>
            <Title key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </Title>
          </tbody>
        );
      })}
    </Table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// export const TransactionHistory = ({ items }) => {
//   //   console.log(items);
//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       {items.map(item => {
//         // console.log(item.currency);
//         return (
//           <tbody>
//             <tr>
//               <td>{item.type}</td>
//               <td>{item.amount}</td>
//               <td>{item.currency}</td>
//             </tr>
//           </tbody>
//         );
//       })}
//     </Table>
//   );
// };
