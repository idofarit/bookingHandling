import React from "react";
import { useAuthUsers } from "../features/authentication/useAuthUsers";
import Spinner from "./Spinner";
import styled from "styled-components";
import Heading from "./Heading";
import Empty from "./Empty";
const TableContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
  box-shadow: var(--shadow-md);
  padding: 10px;
  @media (max-width: 550px) {
    width: auto;
    font-size: 1rem;
    padding: 0.2rem;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  margin-bottom: 2rem;
  max-width: 100%;
  background-color: var(--color-grey-300);
  border-bottom: 2px solid var(--color-grey-0);
  text-align: center;
  border-radius: 5px;
`;

const TableData = styled.td`
  text-align: center;
  padding: 12px;
  font-weight: 400;
  letter-spacing: 1.2px;
  border-bottom: 1px solid var(--color-grey-400);
`;

const ExistingUsers = () => {
  const { authUsers, isLoading } = useAuthUsers();

  if (isLoading) return <Spinner />;

  if (!authUsers?.length) return <Empty resource="active users" />;

  return (
    <>
      <Heading as="h2" style={{ textAlign: "center" }}>
        Existing Active Users
      </Heading>
      <TableContainer>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
            </tr>
          </thead>
          <tbody>
            {authUsers.map((user) => {
              const { fullname, email } = user;
              return (
                <tr key={user.id}>
                  <TableData>{fullname}</TableData>
                  <TableData>{email}</TableData>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default ExistingUsers;
