import React, { useMemo } from 'react';
import {
  Link,
  ThumbnailBox, ThumbnailImg,
  HostName,
  LinkInfo,
  TitleText, DescriptionText
} from './LinkContent.styled';
import { CardContent } from 'styled/base/Card.styled';


const LinkContent = ({ post: { url, thumbnailUrl, title, description } }) => {
  const siteHostName = useMemo(() => new URL(url).host, [url]);

  return (
    <CardContent noPadding={true}>
      <Link as='a' href={url} target='_blank'>
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
      </Link>
    </CardContent>
  )
};

export default LinkContent;