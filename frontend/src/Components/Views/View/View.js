import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './styles.css';
import { likePost, deletePost } from '../../../Actions/Action';

const View = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className='container card'>
      <div className='row'>
        <div className='col' >
          <img className='media' src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}></img>
        </div>
        <div className='col'>
          <div className='actions'>
          <em size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon color='secondary' fontSize="small" />Like {post.likeCount}</em>
          <em size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon color='dark' fontSize="small" /> Delete</em>
          </div>
          <h6>{moment(post.createdAt).fromNow()}</h6>
          <div className='title'><b><em>{post.title}</em></b></div>
          <div>- {post.author}</div>
        </div>
      </div>
      <div>{post.review}</div>
    </div>
  );
};
export default View;