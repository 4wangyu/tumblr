import {
  faFont, faCameraRetro, faQuoteLeft, faVideo, faLink, faComments, faHeadphones,
  faHome, faEnvelope, faCommentDots, faBolt, faUser, faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import { faCompass as faCompassReg } from '@fortawesome/free-regular-svg-icons';
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
  discover: { icon: faCompassReg, path: '/dashboard' },
  inbox: { icon: faEnvelope, path: '/dashboard' },
  messaging: { icon: faCommentDots, path: '/dashboard' },
  activity: { icon: faBolt, path: '/dashboard' },
  account: { icon: faUser, path: '/dashboard' },
  compose: { icon: faPencilAl, modal: 'ComposePost' }
}
