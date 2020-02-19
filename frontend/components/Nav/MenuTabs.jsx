import React from 'react';
import { faCompass as iTrending } from "@fortawesome/free-regular-svg-icons";
import {
  faHome as iHome,
  faEnvelope as iMessages,
  faCommentDots as iChat,
  faBolt as iNotifs,
  faUser as iProfile,
  faPencilAlt as iPost
} from "@fortawesome/free-solid-svg-icons";
import { TabIndex, TabItemLink, TabItemBtn, FAIcon } from './MenuTabs.styled';

const MenuTabs = ({ openModal }) => (
  <TabIndex>
    <TabItemLink to="/dashboard">
      <FAIcon icon={iHome} />
    </TabItemLink>
    <TabItemLink to="/test">
      <FAIcon icon={iTrending} />
    </TabItemLink>
    <TabItemLink to="/test">
      <FAIcon icon={iMessages} />
    </TabItemLink>
    <TabItemLink to="/test">
      <FAIcon icon={iChat} />
    </TabItemLink>
    <TabItemLink to="/test">
      <FAIcon icon={iNotifs} />
    </TabItemLink>
    <TabItemLink to="/test">
      <FAIcon icon={iProfile} />
    </TabItemLink>
    <TabItemBtn onClick={() => openModal('CreatePost')}>
      <FAIcon icon={iPost} />
    </TabItemBtn>
  </TabIndex>
)

export default MenuTabs;