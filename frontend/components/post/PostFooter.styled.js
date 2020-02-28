import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { cardPadding } from 'styled/base/Card.styled';
import { IconBox } from 'styled/base/Icon.styled';

export const CardFooter = styled.div`
  ${flexCenter};
  justify-content: space-between;
  ${cardPadding}
  color: ${theme('colors.textLight')};
  & > * { 
    cursor: pointer; 
  }
`;

export const Notes = styled.div``;

export const Controls = styled.div`
   display: flex;
   position: relative;
`;

export const PadBox = styled(IconBox)`
  margin: .8rem;

  &:last-child {
    margin-right: none;
  }
`;

export const ControlsPopover = styled.div`
  position: absolute;
  bottom: 3.5rem;
  right: -6rem;

  width: 12.8rem;

  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  border: 1px solid ${theme('colors.tertiary')};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
  color: ${theme('colors.textLight')};
  font-weight: ${theme('fontWeights.text')};
  padding: .4rem 0;
  display: ${styledMap`
    default: none;
    open: default;
  `};
`;

export const Control = styled.span`
  ${flexCenterCol};
  align-items: start;
  padding: .5rem 2.5rem .5rem 1.4rem;
  &:hover {
    background-color: ${({ theme }) => α(theme.colors.highlight, .1)};
  }
`;