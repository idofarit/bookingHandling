import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Settings = () => {
  return (
    <Row>
      <Heading as="h1">Update Format Settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};

export default Settings;
