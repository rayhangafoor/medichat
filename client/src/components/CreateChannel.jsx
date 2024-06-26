import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { UserList } from "./";
import { CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setChannelName(event.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input value={() => {}} onChange={() => {}} placeholder="channel-name" />
      <p>Add Members</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
const [channelName,setChannelName] = useState('');

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a new channel"
            : "Send a direct Message"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList/>
    </div>
  );
};

export default CreateChannel;
