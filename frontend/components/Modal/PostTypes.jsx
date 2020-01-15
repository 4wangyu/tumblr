import React from 'react'
import {
  faFont, faCameraRetro, faQuoteLeft, faVideo,
  faLink, faComments, faHeadphones
} from "@fortawesome/free-solid-svg-icons";
import { PostTypeIndex, PostTypeIndexItem, IconBox, FAIcon, Text } from './PostTypes.styled';


const PostTypes = ({openModal}) => (
  <PostTypeIndex>
    <PostTypeIndexItem>
      <IconBox data-post-type="text">
        <FAIcon icon={faFont} />
      </IconBox>
      <Text>Text</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem onClick={()=> openModal('ImageGalleryForm')}>
      <IconBox data-post-type="photo">
        <FAIcon icon={faCameraRetro} data-post-type="photo" />
      </IconBox>
      <Text>Photo</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem>
      <IconBox data-post-type="quote">
        <FAIcon icon={faQuoteLeft} />
      </IconBox>
      <Text>Quote</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem>
      <IconBox data-post-type="link">
        <FAIcon icon={faLink} />
      </IconBox>
      <Text>Link</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem>
      <IconBox data-post-type="chat">
        <FAIcon icon={faComments} />
      </IconBox>
      <Text>Chat</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem>
      <IconBox data-post-type="audio">
        <FAIcon icon={faHeadphones} />
      </IconBox>
      <Text>Audio</Text>
    </PostTypeIndexItem>
    <PostTypeIndexItem>
      <IconBox data-post-type="video">
        <FAIcon icon={faVideo} />
      </IconBox>
      <Text>Video</Text>
    </PostTypeIndexItem>
  </PostTypeIndex>
)

export default PostTypes;