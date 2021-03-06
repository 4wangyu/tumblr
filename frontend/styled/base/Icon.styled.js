import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFont, faCameraRetro, faQuoteLeft, faVideo, faLink, faComments, faHeadphones,
  faHome, faEnvelope, faCommentDots, faBolt, faUser, faPencilAlt,
  faCog, faRetweet, faHeart as faHeartS, faUserFriends, faArrowAltCircleUp, faPlus, faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faCompass,
  faPaperPlane, faComment, faHeart as faHeartR
} from '@fortawesome/free-regular-svg-icons';
import { popColors } from 'styled/theme';

export const postTypeIconData = {
  text: { icon: faFont, color: null, postType: 'Text' },
  photo: { icon: faCameraRetro, color: popColors.redOrange, postType: 'ImageGallery' },
  quote: { icon: faQuoteLeft, color: popColors.pizzazz, postType: 'Quote' },
  link: { icon: faLink, color: popColors.malachite, postType: 'Link' },
  // chat: { icon: faComments, color: popColors.dodgerBlue, postType: 'Chat' },
  audio: { icon: faHeadphones, color: popColors.cornflowerBlue, postType: 'Audio' },
  video: { icon: faVideo, color: popColors.hotPink, postType: 'Video' },
};

export const privateNavIconData = {
  home: { icon: faHome, path: '/dashboard' },
  explore: { icon: faCompass, path: '/explore/trending' },
  inbox: { icon: faEnvelope, path: '/dashboard' },
  messaging: { icon: faCommentDots, path: '/dashboard' },
  activity: { icon: faBolt, path: '/dashboard' },
  account: { icon: faUser },
  compose: { icon: faPencilAlt }
};

export const navPopoverIconData = {
  likes: { icon: faHeartS, path: '/dashboard', userProp: 'likedPostIds' },
  following: { icon: faUserFriends, path: '/dashboard', userProp: 'followeeIds' },
  // settings:{},
  // help:{},
};


const Icon = styled(FontAwesomeIcon)`
  display: ${styledMap`
    default: inline-block;
    hidden: none;
  `};
  font-size: ${styledMap`
      default: ${theme('fontSizes.iconMd')};
      sm: ${theme('fontSizes.iconSm')};
      md: ${theme('fontSizes.iconMd')};
      lg: ${theme('fontSizes.iconLg')};
  `};
`;

export default Icon;

export const IconSm = styled(Icon).attrs({ sm: true })``;

export const IconMd = styled(Icon).attrs({ md: true })``;

export const IconLg = styled(Icon).attrs({ lg: true })``;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${styledMap`
    default: inline-block;
    hidden: none;
  `};
`;


// -------------------- Post 
export const ShareIcon = styled(IconSm).attrs({ icon: faPaperPlane })``;

export const ReplyIcon = styled(IconSm).attrs({ icon: faComment })``;

export const ReblogIcon = styled(IconSm).attrs({ icon: faRetweet })``;

export const LikeIcon = styled(IconSm).attrs(props => ({
  icon: props.liked ? faHeartS : faHeartR
}))`
  color: ${styledMap`
    default: inherit;
    liked: ${theme('colors.warning')};
  `};
  transition: none;
`;

export const ControlsIcon = styled(IconSm).attrs({ icon: faCog })``;

export const ToTopIcon = styled(IconMd).attrs({ icon: faArrowAltCircleUp })``;

export const PlusIcon = styled(IconSm).attrs({ icon: faPlus })``;
export const TimesIcon = styled(IconSm).attrs({ icon: faTimes })``;