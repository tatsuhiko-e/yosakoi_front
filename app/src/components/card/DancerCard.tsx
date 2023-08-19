import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Grid, Modal, Typography } from '@mui/material';
import MusicIconImage from '../image/musicIcon.png';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { DefaultButton } from '../button/DefaultButton';

type DancerType = {
  user_id: number;
  nick_name: Date;
  participation: number;
  gender: number;
}

const DancerName = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 300,
  width: 600,
  bgcolor: 'background.paper',
  border: '#000',
  boxShadow: 24,
  p: 4,
};

export const DancerCard = (props: any) => {
  const [DancerTypeColor, setDancerTypeColor] = useState("#007a2b");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (active: boolean, item: any) => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    switch (props.data.Dancer_type) {
      case 1: 
        setDancerTypeColor("#87b9ff");
        break
      case 2:
        setDancerTypeColor("#ff9090");
        break
      default:
    }
  },[props])

  const DancerCardContainer = styled.button`
    background-color: #ffffff;
    margin: 16px auto;
    width: 96%;
    height: auto;
    border: 1px solid #888888;
    border-left: 24px solid ${(DancerTypeColor)};
    box-shadow: 1px 5px 5px 1px #999;
  `

  const handleDeletButtonClick = () => {
    setOpen(true)
  }


  return (
    <DancerCardContainer>
      <Grid container spacing={1} style={{ width: "100%", margin: "0 auto", padding: "16px" }}>
        <Grid item xs={10} style={{ padding: "8px" }}>
          <DancerName>{props.data.nickName}</DancerName>
        </Grid>
      </Grid>
    </DancerCardContainer>
  );
}
