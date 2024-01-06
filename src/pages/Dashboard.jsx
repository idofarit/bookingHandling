import UserAvatar from "../features/authentication/UserAvatar";
import DashboardFilter from "../features/dashboard/DashboardFilter";

import HomeLayout from "../ui/HomeLayout";

import Row from "../ui/Row";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <DashboardFilter />
        <UserAvatar />
      </Row>

      <HomeLayout />
    </>
  );
};

export default Dashboard;
