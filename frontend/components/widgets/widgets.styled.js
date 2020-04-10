import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { TimesIcon } from 'styled/base/Icon.styled';

export const WidgetContainer = styled.div`
  color: #fff;
  margin-bottom: 3.8rem;
  width: 32rem;
`;

export const WidgetHeader = styled.h2`
  padding: 0 1rem .4rem 1rem;
  font-size: ${theme('fontSizes.xl')};
  font-weight: ${theme('fontWeights.heading')};
  border-bottom: 2px solid ${α('#fff', .13)};
`;

export const WidgetContent = styled.div`
  margin-top: ${styledMap`
    default: 0;
    mT: 1rem;
  `};
  padding: ${styledMap`
    default: 0;
    pX: 0 .8rem;
  `};
`;

