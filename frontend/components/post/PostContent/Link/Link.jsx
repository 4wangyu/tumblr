import React, { useContext, useMemo } from 'react';
import { PostContext } from '../../Post';
import {
  LinkContainer,
  ThumbnailBox, ThumbnailImg,
  HostUrl,
  LinkInfo,
  TitleText, DescriptionText
} from './Link.styled';

const Link = () => {
  const { url, thumbnailUrl, title, description } = useContext(PostContext);
  const siteHostName = useMemo(() => new URL(url).host, [url]);

  return (
    <LinkContainer href={url}>
      {thumbnailUrl && (
        <ThumbnailBox>
          <HostUrl as='div' imageCaption={true}>{siteHostName}</HostUrl>
          <ThumbnailImg src={thumbnailUrl} />
        </ThumbnailBox>
      )}
      <LinkInfo>
        {!thumbnailUrl && <HostUrl href={url}>{siteHostName}</HostUrl>}
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </LinkInfo>
    </LinkContainer>
  )
};

export default Link;