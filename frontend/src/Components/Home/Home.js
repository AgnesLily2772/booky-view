import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {AiFillPlusSquare} from 'react-icons/ai';
import Views from '../Views/Views'
import Input from '../Input/Input';
import { getPosts } from '../../Actions/Action';
import useStyles from './styles';
import styled  from 'styled-components';
import Modal from 'react-modal';

const ButtonContainer = styled.div`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 50px;
  cursor: pointer;
  margin-top:25px;
  padding:2px;
  border: 2px white solid;
  border-radius:10px;
  color: white;
  background: none;
  
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="container">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Views setCurrentId={setCurrentId}/> 
              <ButtonContainer onClick={openModal}>Create Review</ButtonContainer>                 
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal}>
              <Input currentId={currentId} setCurrentId={setCurrentId}/></Modal>
          </Grid>
    </div>
  )
}
export default Home;