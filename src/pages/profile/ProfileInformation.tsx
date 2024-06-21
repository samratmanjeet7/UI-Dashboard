import React from "react";
import { Flex, Text, Button } from "@aws-amplify/ui-react";

const ProfileInformation = () => {
  return (
    <div className="profile-card-content">
      <Text fontWeight="600" fontSize="18px" marginBottom="14px">
        Profile Information
      </Text>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Full Name:
        </Text>
        <Text variation="tertiary">Initializ</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Phone:
        </Text>
        <Text variation="tertiary">(00) 000 0000 000</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Email:
        </Text>
        <Text variation="tertiary">#@gmail.com</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Location:
        </Text>
        <Text variation="tertiary">Country</Text>
      </Flex>
      <div className="profile-card-edit">
        <Button marginLeft="auto">Edit</Button>
      </div>
    </div>
  );
};

export default ProfileInformation;
