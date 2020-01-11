import React, { useState } from 'react'


const PostForm = ({ action, initialPost, errors, processForm }) => {

  const [post, setPost] = useState(initialPost);

  const handleTextInput = e => {
    const { name, value } = e.target;

    setPost(prevPost => Object.assign({}, prevPost, { [name]: value }));
  }

  const handleFileInput = e => {
    const [file] = e.target.files;
    // ajax contentType, processData ?
    setPost(prevPost => Object.assign({}, prevPost, { assetFile: file, assetUrl: URL.createObjectURL(file) }))

    // const fileReader = new FileReader();

    // fileReader.onloadend = () => {
    //   setPost(prevPost => Object.assign({}, prevPost, { assetFile: file, assetUrl: fileReader.result }))
    // }
    // if (file) {
    //   fileReader.readAsDataURL(file)
    // }
    debugger;
    // setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formPost = {}
    processForm(formPost)
    // .then(post => {});
  }



  const { title, description, assetFile, postType, assetUrl } = post;
  // const assetPreview = assetUrl && <img src={assetUrl} alt="preview" width="250px" />;
  const assetPreview = assetUrl && (
    <video width="320" height="240" controls>
      <source src={assetUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <div>
      <div className="formErrors">
        {errors && <ul>{errors.map(err => <li>{err}</li>)}</ul>}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input
            name="title" type="text"
            onChange={handleTextInput}
            value={title}
          />
        </label>
        <br />
        <label>Description:
          <textarea
            name="description" type="text"
            onChange={handleTextInput}
            value={description}
          />
        </label>
        <br />
        <h3>Preview</h3>
        {assetPreview}
        <br />
        <label>Upload:
          <input
            name="assetFile" type="file"
            onChange={handleFileInput}
          // value={assetFile}
          // accept="image/png, image/jpeg"
          // multiple={false}
          />
        </label>
        <br />
        <button type="submit">Post!</button>
      </form>
    </div>
  )
}


export default PostForm;