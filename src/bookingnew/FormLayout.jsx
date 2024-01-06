import React, { useState } from "react";
import CreateNewBookinForm from "./CreateNewBookinForm";
import CreateNewCustomerForm from "./CreateNewCustomerForm";
import styled from "styled-components";
import Heading from "../ui/Heading";

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 1.5rem;
  border-radius: 5px;
  padding: 1.5px;
  background-color: white;
  margin-bottom: 50px;
`;

const ProgressLine = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgb(98, 0, 255);
`;

const Button = styled.button`
  margin: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
  background-color: rgba(0, 0, 0.2, 0.3);
  width: 100px;
`;

const FormContainer = styled.div``;

function FormLayout() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Add Customer Details", "Booking Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <CreateNewCustomerForm />;
    } else {
      return <CreateNewBookinForm />;
    }
  };

  return (
    <FormContainer>
      <ProgressBar>
        <ProgressLine
          style={{ width: page === 0 ? "50%" : "100%", textAlign: "center" }}
        ></ProgressLine>
        <p
          style={{
            margin: "auto",
            textAlign: "center",
            marginTop: "0.3rem",
          }}
        >
          {page === 0 ? <span>50%</span> : <span>100%</span>}
        </p>
      </ProgressBar>
      <div>
        <Heading as="h1">{FormTitles[page]}</Heading>
      </div>
      <div>{PageDisplay()}</div>
      {page !== 0 && (
        <Button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </Button>
      )}
      {page !== FormTitles.length - 1 ? (
        <Button
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </Button>
      ) : null}
    </FormContainer>
  );
}

export default FormLayout;
