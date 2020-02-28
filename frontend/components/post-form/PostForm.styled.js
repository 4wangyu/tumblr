import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { cardPadding } from 'styled/base/Card.styled';

// -------------------- Header
export const CardHeader = styled.div`
  ${cardPadding};
`;

// -------------------- Footer
export const CardFooter = styled.div`
  ${cardPadding};
  display: flex;
  justify-content: space-between;
`;

export const Tags = styled.div`
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
    background-color: ${({ theme }) => α(theme.colors.highlight, .1)};
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
`;

