import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  padding: 40px 30px 30px;
  border-radius: 20px;
  box-shadow: var(--shadow-box);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 1;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const TodayActivity = () => {
  const { activities, isLoading } = useTodayActivity();

  return (
    <>
      <StyledToday>
        <Row type="horizontal">
          <Heading as="h2">Today</Heading>
        </Row>

        {!isLoading ? (
          activities?.length > 0 ? (
            <TodayList>
              {activities.map((activity) => (
                <TodayItem activity={activity} key={activity.id} />
              ))}
            </TodayList>
          ) : (
            <NoActivity>No activity today...</NoActivity>
          )
        ) : (
          <Spinner />
        )}
      </StyledToday>
    </>
  );
};

export default TodayActivity;
