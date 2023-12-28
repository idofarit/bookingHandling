import SignupForm from "../features/authentication/SignupForm";
import ExistingUsers from "../ui/ExistingUsers";
import Heading from "../ui/Heading";

const NewUsers = () => {
  return (
    <>
      <ExistingUsers />
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
};

export default NewUsers;
