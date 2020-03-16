import React, { useContext, useEffect, useState, useMemo } from 'react';
import {
  Link,
  ThumbnailBox, ThumbnailImg,
  HostName,
  LinkInfo,
} from 'components/post/post-content/LinkContent.styled';
import { TitleTextarea, DescriptionTextarea } from './index.styled'
import { FormContext } from 'components/post-form/PostForm';
import isValidURL from 'util/isValidURL';
import LinkEditor from './LinkEditor';
import handleAutosizeTextarea from 'util/handleAutosizeTextarea';
// import TextareaAutosize from '../TextareaAutosize';


const LinkFields = () => {
  const { url, title, description, thumbnailUrl, formFields, setFormFields, handleTextInput } = useContext(FormContext);
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

  const handleTextareaChange = e => {
    handleAutosizeTextarea(e);
    handleTextInput(e);
  };
  console.log(formFields)
  if (siteHostName) return (
    <Link>
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
          name="title"
          onChange={handleTextareaChange}
          value={title}
          placeholder="Enter a title"
        />
        <DescriptionTextarea
          name='description'
          onChange={handleTextareaChange}
          value={description}
          placeholder="Enter a summary"
        />
      </LinkInfo>
    </Link>
  );

  return (
    <LinkEditor
      handleUrlInput={handleUrlInput}
    />
  );

};

export default LinkFields;