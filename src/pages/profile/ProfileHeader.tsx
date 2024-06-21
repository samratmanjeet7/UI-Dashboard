import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

interface ProfileHeaderProps {
  name?: string;
  email?: string;
  imageSrc?: string;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  console.log(props);
  return (
    <>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-image">
          <img alt="avatar" src="https://ugc.production.linktr.ee/2e721645-9cf1-47ef-b33a-0826660a578f_initializ-logo.jpeg?io=true&size=avatar-v3_0"></img>
        </div>
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            Initializ
          </Text>
          <Text variation="tertiary">#@gmail.com</Text>
        </div>
      </Flex>
    </>
  );
};

export default ProfileHeader;
