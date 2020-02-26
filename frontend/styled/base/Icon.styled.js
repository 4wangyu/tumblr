import styledMap, { mapToTheme as theme } from 'styled-map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFont, faCameraRetro, faQuoteLeft, faVideo, faLink, faComments, faHeadphones,
  faHome, faEnvelope, faCommentDots, faBolt, faUser, faPencilAlt,
  faCog, faHeart as faHeartS
} from '@fortawesome/free-solid-svg-icons';
import {
  faCompass,
  faPaperPlane, faComment, faRetweet, faHeart as faHeartR
} from '@fortawesome/free-regular-svg-icons';
import { popColors } from './theme';

export const postTypeIconData = {
  text: { icon: faFont, color: 'inherit' },
  photo: { icon: faCameraRetro, color: popColors.redOrange, modal: 'ImageGalleryForm' },
  quote: { icon: faQuoteLeft, color: popColors.pizzazz, modal: 'QuoteForm' },
  link: { icon: faLink, color: popColors.malachite, modal: 'LinkForm' },
  chat: { icon: faComments, color: popColors.dodgerBlue, modal: '' },
  audio: { icon: faHeadphones, color: popColors.cornflowerBlue, modal: 'AudioForm' },
  video: { icon: faVideo, color: popColors.hotPink, modal: 'VideoForm' },
};

export const privateNavIconData = {
  home: { icon: faHome, path: '/dashboard' },
  discover: { icon: faCompass, path: '/dashboard' },
  inbox: { icon: faEnvelope, path: '/dashboard' },
  messaging: { icon: faCommentDots, path: '/dashboard' },
  activity: { icon: faBolt, path: '/dashboard' },
  account: { icon: faUser, path: '/dashboard' },
  compose: { icon: faPencilAlt, modal: 'ComposePost' }
};


const Icon = styled(FontAwesomeIcon)`
  ${styledMap`
      default: ${theme('fontSizes', 'iconMd')};
      sm: ${theme('fontSizes', 'iconSm')};
      md: ${theme('fontSizes', 'iconMd')};
      lg: ${theme('fontSizes', 'iconLg')};
  `}
`;

export default Icon;

export const IconSm = styled(Icon).attrs({ sm: true })``;

export const IconLg = styled(Icon).attrs({ lg: true })``;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ------------------- Post -------------------
export const ShareIcon = styled(IconSm).attrs({ icon: faPaperPlane })``;

export const ReplyIcon = styled(IconSm).attrs({ icon: faComment })``;

export const ReblogIcon = styled(IconSm).attrs({ icon: faRetweet })``;

export const LikeIcon = styled(IconSm).attrs(props => ({
  icon: props.liked ? faHeartS : faHeartR
}))`
  color: ${styledMap`
    default: inherit;
    liked: ${theme('colors', 'warning')};
  `};
`;

export const ControlsIcon = styled(IconSm).attrs({ icon: faCog })``;




