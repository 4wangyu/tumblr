import React, { useContext, useEffect, useState, useMemo } from 'react';
import {
  LinkContainer,
  ThumbnailBox, ThumbnailImg,
  HostUrl,
  LinkInfo,
} from 'components/Post/PostContent/Link/Link.styled';
import { TitleTextarea, DescriptionTextarea } from './index.styled'
import { FormContext } from 'components/post-form/PostForm';
import isValidURL from 'util/isValidURL';
import LinkEditor from './LinkEditor';

const LinkFields = () => {
  const { url, thumbnailUrl, setFormFields } = useContext(FormContext);
  const [isFetchingOG, setIsFetchingOG] = useState(false);
  const siteHostName = useMemo(() => isValidURL(url) && new URL(url).host, [url]);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Link',
      url: '',
      title: undefined,
      description: undefined,
      thumbnailUrl: undefined,
      ...prev,
    }));
  }, []);

  const fetchOpenGraph = async url => {
    setIsFetchingOG(true)
    try {
      const response = await $.post({ url: '/api/open_graph/fetch', data: { target: { url } } });
      setFormFields(prev => ({ ...prev, ...response }));
    } catch  {
      setFormFields(prev => ({ ...prev, url }));
    }
    setIsFetchingOG(false)
  };

  const handleUrlInput = e => {
    const { value: url } = e.target;
    if (isValidURL(url) && !isFetchingOG) {
      fetchOpenGraph(url)
    };
  };

  if (siteHostName) return (
    <LinkContainer href={thumbnailUrl ? url : undefined} as={!thumbnailUrl ? 'div' : 'a'} >
      {thumbnailUrl && (
        <ThumbnailBox>
          <HostUrl href={thumbnailUrl ? url: undefined} as={thumbnailUrl ? 'a' : 'div'} imageCaption={true}>{siteHostName}</HostUrl>
          <ThumbnailImg src={thumbnailUrl} />
        </ThumbnailBox>
      )}
      <LinkInfo>
        {!thumbnailUrl && <HostUrl href={url}>{siteHostName}</HostUrl>}
        <TitleTextarea
          lineHeight={34}
          name="title"
          placeholder="Enter a title"
        />
        <DescriptionTextarea
          lineHeight={21}
          name='description'
          placeholder="Enter a summary"
        />
      </LinkInfo>
    </LinkContainer>
  );

  return (
    <LinkEditor
      handleUrlInput={handleUrlInput}
    />
  );

};

export default LinkFields;