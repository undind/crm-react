import { FC, useEffect } from 'react';

const Dashboard: FC = () => {
  useEffect(() => {
    document.title = `Dashboard`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
