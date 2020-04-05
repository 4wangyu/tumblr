import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { flexCenter } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartS, faPen } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export const PostFooterContainer = styled.footer`
  ${flexCenter};
  justify-content: space-between;
  border-top: .5px solid ${theme('colors.divider')};
  color: ${theme('colors.textLight')};
  & > * {
    color: ${theme('colors.textLight')};
    cursor: pointer; 
  }
`;

export const Notes = styled.div`
  font-size: 1.6rem;
`;

export const ConfigContainer = styled.div`
   display: flex;
   position: relative;
   > * {
    margin-left: 2rem;
  }
`;

export const ConfigItem = styled.div`
 ${flexCenter};
  color: ${theme('colors.textLight')};
`;

const ConfigIcon = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
`;

export const HeartIcon = styled(ConfigIcon).attrs(props => ({
  icon: (props.fillRed ? faHeartS : faHeartR)
}))`
  color: ${styledMap`
    default: inherit;
    fillRed: ${theme('colors.warning')};
  `};
  transition: none;
`;

export const TrashIcon = styled(ConfigIcon).attrs({
  icon: faTrashAlt
})``;

export const PenIcon = styled(ConfigIcon).attrs({
  icon: faPen
})``;