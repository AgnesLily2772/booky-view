import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost, updatePost } from '../../Actions/Action';

const Input = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ author: '', title: '', review: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((review) => review._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
const clear = () => {
    setCurrentId(0);
    setPostData({ author: '', title: '', review: '', selectedFile: '' });
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form  autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Write your Review here...'}</Typography>
          <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
              <TextField name="review" variant="outlined" label="Review" fullWidth multiline rows={3} value={postData.review} onChange={(e) => setPostData({ ...postData, review: e.target.value })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Publish</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Discard</Button>
      </form>
    </Paper>
  );
};

export default Input;