import React, { useMemo } from 'react';
import {
  Wrapper,
  ThumbnailBox, ThumbnailImg,
  HostName,
  LinkInfo,
  TitleText, DescriptionText
} from './Link.styled';
import { CardContent } from 'styled/base/Card.styled';


const Link = ({ post: { url, thumbnailUrl, title, description } }) => {
  const siteHostName = useMemo(() => new URL(url).host, [url]);

  return (
    <CardContent noPadding={true}>
      <Wrapper as='a' href={url} target='_blank'>
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
      </Wrapper>
    </CardContent>
  )
};

export default Link;