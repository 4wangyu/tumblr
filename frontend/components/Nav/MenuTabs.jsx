import React from 'react';
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHome, faEnvelope, faCommentDots, faBolt, faUser, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabLink, TabIcon, TabBtn } from './Nav.styled';

const MenuTabs = ({ openModal }) => (
  <Tabs>
    <TabLink to="/dashboard">
      <TabIcon icon={faHome} />
    </TabLink>
    <TabLink to="/test">
      <TabIcon icon={faCompass} />
    </TabLink>
    <TabLink to="/test">
      <TabIcon icon={faEnvelope} />
    </TabLink>
    <TabLink to="/test">
      <TabIcon icon={faCommentDots} />
    </TabLink>
    <TabLink to="/test">
      <TabIcon icon={faBolt} />
    </TabLink>
    <TabLink to="/test">
      <TabIcon icon={faUser} />
    </TabLink>
    <TabBtn onClick={() => openModal('PostTypes')}>
      <TabIcon icon={faPencilAlt} />
    </TabBtn>
  </Tabs>
)

export default MenuTabs;