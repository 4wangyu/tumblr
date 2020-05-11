import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { cardPadding } from 'styled/base/Card.styled';

export const FormHeader = styled.div`
  ${cardPadding};
  border-bottom: .5px solid ${theme('colors.divider')};
  display: flex;
  justify-content: space-between;
  line-height: 1.8;
  padding-bottom: 1rem;
  z-index: 100;
`;

export const FormFooter = styled.div`
  ${cardPadding};
  border-top: .5px solid ${theme('colors.divider')};
  display: flex;
  justify-content: space-between;
`;

export const TagIndex = styled.div`
  min-height: 4rem;
  padding: .5rem 2rem 1rem 1.5rem;
  margin-top: .5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Tag = styled.span`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  margin: 0 1px;
  &:hover, &.selected {
    background-color: ${({ theme }) => α(theme.colors.highlight, .3)};
    color: ${theme('colors.highlight')}
  }
`;

export const TagForm = styled.form`
  padding: 5px;
  margin-left: 1px;
`;

export const TagInput = styled.input.attrs(props => ({
  placeholder: props.showPlaceholder ? '#tags' : '',
  name: 'tags'
}))`
  background-color: transparent;
  &, &::placeholder {
    color: ${theme('colors.textLight')}
  }
`;

