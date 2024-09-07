import Card from './card/card';
import user from '../../src/user.json';
import Statistic from './statistics/statistics';
import data from '../../src/data.json';
import FriendList from './friends/friendList';
import friends from '../../src/friends.json';
import TransactionHistory from './transaction/transaction';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Card user={user} />;
        <Statistic title="Upload stats" data={data} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};
