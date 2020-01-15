import styled from 'styled-components';

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostWrapper = styled.div`
  display: flex;
  margin: 2rem;
`;

export const UserAvatar = styled.img.attrs(P => ({
  src: P.src || 'https://assets.tumblr.com/images/default_avatar/cone_open_128.png'
}))`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 3px;
  position: sticky;
  top: 1.5rem;
  margin-right: 2rem;
`;