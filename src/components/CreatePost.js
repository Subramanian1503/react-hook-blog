import { useFormInput } from './hooks';
import db from '../firebase';

function CreatePost() {
  // Required variables
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  // Required utility functions
  function handleSubmit(event) {
    // prevent default so that the page will not reload
    event.preventDefault();

    // log all the values required from the form
    console.log('title', title.value);
    console.log('subTitle', subTitle.value);
    console.log('content', content.value);

    // Save the collected data from form to firebase
    db.collection('posts')
      .add({
        title: title.value,
        subTitle: subTitle.value,
        content: content.value,
        createdOn: new Date(),
      })
      .then((addedDocument) => {
        console.log('Post added to DB successfully!!');
      })
      .catch((error) => {
        console.log('Error occured while trying to save post in DB');
      });
  }

  return (
    <div className="create-post">
      {/* heading  */}
      <h1>Create Post</h1>

      {/* create post form */}
      <form onSubmit={handleSubmit}>
        {/* input fields */}
        <div className="form-field">
          <label>Title</label>
          <input
            value={title.value}
            onChange={(event) => title.onChange(event)}
          />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input
            value={subTitle.value}
            onChange={(event) => subTitle.onChange(event)}
          />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea
            value={content.value}
            onChange={(event) => content.onChange(event)}
          ></textarea>
        </div>

        {/* submit button */}
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
