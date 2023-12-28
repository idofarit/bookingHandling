import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import RecentBookings from "../ui/RecentBookings";
import Row from "../ui/Row";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
      <RecentBookings />
    </>
  );
};

export default Dashboard;
