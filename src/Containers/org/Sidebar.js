import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMemberOrg, createTasklist } from "../../services/organizations";
import {
  membersSelector,
  setMembers,
  setTasklists,
  tlSelector,
} from "../../slices/orgsSlice";
import Tasklist from "../../Components/org/Tasklist";
import {
  Button,
  Container,
  ContainerCircle,
  Cover,
  Form,
  Header,
  HelperText,
  HoverBox,
  Hr,
  Image,
  Input,
  Subheader,
} from "../../Styles/org/sidebarStyles";
import Member from "../../Components/org/Member";
import { Icon } from "@iconify/react";
import {
  memberButtonSelector,
  removeMemberClick,
} from "../../slices/miscSlice";

const Sidebar = ({ tasklists, orgData, members, tasks }) => {
  const [show, setShow] = useState(false);
  const [memberShow, setMemberShow] = useState(false);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [invalid, setInvalid] = useState(false);
  const tls = useSelector(tlSelector);
  const mms = useSelector(membersSelector);
  const memberClicked = useSelector(memberButtonSelector);
  const dispatch = useDispatch();
  const handleAddClick = (e) => {
    setShow(true);
  };
  const handleMemberClick = (e) => {
    setMemberShow(true);
  };
  const handleCreateList = async (e) => {
    e.preventDefault();
    if (title && title.length >= 5)
      try {
        const response = await createTasklist({
          title: title,
          org_id: orgData._id,
        });
        setShow(false);
        dispatch(setTasklists([...tls, JSON.parse(response).data]));
      } catch (err) {
        console.log(err.response);
      }
    else setInvalid(true);
  };
  const handleMemberAdd = async (e) => {
    e.preventDefault();
    if (member) {
      try {
        const response = await addMemberOrg({
          org_id: orgData._id,
          email: member,
        });
        setMemberShow(false);
        dispatch(setMembers([...mms, JSON.parse(response).data]));
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <Cover>
      <Header animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }}>
        <Image
          src="/TaskStarLogo.png"
          alt="logo"
          animate={{ opacity: 1, rotateZ: 360, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
        />
        <span>Task Star</span>
      </Header>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
      <Subheader>
        <span>Lists</span>
        {show && (
          <Icon
            icon="clarity:window-close-line"
            width="20"
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => setShow(false)}
          />
        )}
      </Subheader>
      {!show && <Button onClick={handleAddClick}>Add Tasklist</Button>}
      {show && (
        <Form onSubmit={handleCreateList}>
          <Input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button>Create</Button>
          {invalid && <HelperText>* Min 5 characters.</HelperText>}
        </Form>
      )}
      <Container>
        {tasklists.map((tasklist, index) => (
          <Tasklist
            key={tasklist._id}
            title={tasklist.title}
            tasks={tasks}
            id={tasklist._id}
          />
        ))}
      </Container>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
      <Subheader>
        <span>Members</span>
        {memberShow && (
          <Icon
            icon="clarity:window-close-line"
            width="20"
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => setMemberShow(false)}
          />
        )}
      </Subheader>
      {!memberShow && <Button onClick={handleMemberClick}>Add Member</Button>}
      {memberShow && (
        <Form onSubmit={handleMemberAdd}>
          <Input
            type="email"
            placeholder="Member Email"
            onChange={(e) => setMember(e.target.value)}
          />
          <Button>Add</Button>
          {invalid && <HelperText>Email is required.</HelperText>}
        </Form>
      )}
      <ContainerCircle>
        {memberClicked && (
          <HoverBox>
            <Icon
              icon="clarity:window-close-line"
              width="20"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeMemberClick())}
            />
            <Icon
              icon="gg:remove"
              width="20"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "10px",
                cursor: "pointer",
              }}
            />
            <span>{memberClicked.full_name}</span>
            <span>{memberClicked.email}</span>
          </HoverBox>
        )}
        {Object.keys(members).map((id) => (
          <Member key={id} member={members[id]} id={id} />
        ))}
      </ContainerCircle>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
    </Cover>
  );
};

export default Sidebar;