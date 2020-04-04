import React, { useContext, useEffect, useState, useMemo } from 'react';
import {
  Wrapper,
  ThumbnailBox, ThumbnailImg,
  HostName,
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
    <Wrapper>
      {thumbnailUrl && (
        <ThumbnailBox>
          <HostName href={url} imageCaption={true}>{siteHostName}</HostName>
          <ThumbnailImg src={thumbnailUrl} />
        </ThumbnailBox>
      )
      }
      <LinkInfo>
        {!thumbnailUrl && <HostName href={url}>{siteHostName}</HostName>}
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
    </Wrapper>
  );

  return (
    <LinkEditor
      handleUrlInput={handleUrlInput}
    />
  );

};

export default LinkFields;