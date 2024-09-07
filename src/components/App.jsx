import Card from './card/card';
import user from '../../src/user.json';

import Statistics from './statistics/statistics';
import data from '../../src/data.json';

export const App = () => {
  return (
    <>
      <div>
        <Card user={user} />
        <Statistics data={data} />
      </div>
    </>
  );
};
