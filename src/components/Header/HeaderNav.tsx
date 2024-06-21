import React from "react";
import { Menu, MenuItem, MenuButton, Link } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";

const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <>
      {baseConfig.projectLink ? (
        <div className="github-link">
          <Link
            href={baseConfig.projectLink}
            isExternal={true}
            ariaLabel="github"
          >
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <img alt='' src='https://ugc.production.linktr.ee/2e721645-9cf1-47ef-b33a-0826660a578f_initializ-logo.jpeg?io=true&size=avatar-v3_0'></img>
            </div>
          </MenuButton>
        }
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
