import CreateWorkSpace from "./components/CreateWorkSpace";
import CreateTag from "./components/CreateTag";
import CreateDepartment from "./components/CreateDepartment";
import CreateImpactLevel from "./components/CreateImpactLevel";
import UserRoles from "./components/UserRoles";
import CreateEventType from "./components/CreateEventType";
import SubmitNewInvitation from "./components/SubmitNewInvitation";
import SubmitNewInvitationNew from "./components/SubmitNewInvitationNew";

const Module = ({ lang, theme }) => {
  return (
    <>
      {/* <CreateWorkSpace /> */}
      {/* <CreateTag />
      <CreateDepartment /> 
      <CreateImpactLevel />
      <UserRoles />
      <CreateEventType lang={lang} theme={theme} /> */}
      <SubmitNewInvitation />
      <SubmitNewInvitationNew />
    </>
  );
};

export default Module;
