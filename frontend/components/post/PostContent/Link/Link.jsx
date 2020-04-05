import React, { useContext, useMemo } from 'react';
import { PostContext } from '../../Post';
import {
  LinkContainer,
  ThumbnailBox, ThumbnailImg,
  HostName,
  LinkInfo,
  TitleText, DescriptionText
} from './Link.styled';

const Link = () => {
  const { url, thumbnailUrl, title, description } = useContext(PostContext);
  const siteHostName = useMemo(() => new URL(url).host, [url]);

  return (
    <LinkContainer as='a' href={url} target='_blank'>
      {thumbnailUrl && (
        <ThumbnailBox>
          <HostName href={url} imageCaption={true}>{siteHostName}</HostName>
          <ThumbnailImg src={thumbnailUrl} />
        </ThumbnailBox>
      )}
      <LinkInfo>
        {!thumbnailUrl && <HostName href={url}>{siteHostName}</HostName>}
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </LinkInfo>
    </LinkContainer>
  )
};

export default Link;