import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Grid, Modal, Typography } from '@mui/material';
import MusicIconImage from '../image/musicIcon.png';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { DefaultButton } from '../button/DefaultButton';

const MusicImage = styled.img`
  width: 90%;
  height: auto;
  border: solid;
  border-radius: 100px;
`

const MusicName = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const MusicTheme = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 32px 16px auto;
`

const IconButtonContainer = styled.button`
  background-color: #fdfdfd;
  border: solid #7a7a7a;
  border-radius: 10px;
  text-align: center;
  width: 100px;
  height: 100px;
`

const IconButtonText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const PublicCustomIcon = styled(PublicIcon)`
  color: #2681ff;
`

const DeleteCustomIcon = styled(DeleteForeverIcon)`
  color: #2681ff;
`

const OffIconButtonText = styled.div`
  text-align: center;
  color: #fd3838;
  font-size: 18px;
  font-weight: bold;
`

const PublicCustomOffIcon = styled(PublicOffIcon)`
  color: #fd3838;
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

export const MusicListCard = (props: any) => {
  const [musicDeliveryStatus, setMusicDeliveryStatus] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (active: boolean, item: any) => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const MusicCardContainer = styled.div`
    margin: 16px auto;
    width: 96%;
    height: auto;
    border: 1px solid #888888;
    border-left: 24px solid ${(musicDeliveryStatus ? "#2681ff" : "#ff5b5b")};
    box-shadow: 1px 5px 5px 1px #999;
  `

  const handleChangeDeliveryStatus = () => {
    setMusicDeliveryStatus(!musicDeliveryStatus)
  }

  const handleDeletButtonClick = () => {
    setOpen(true)
  }

  return (
    <MusicCardContainer>
      <Grid container spacing={1} style={{ width: "100%", margin: "0 auto", padding: "16px" }}>
        <Grid item xs={1} style={{ margin: "auto" }}>
          <MusicImage src={MusicIconImage} />
        </Grid>
        <Grid item xs={8} style={{ padding: "8px" }}>
          <MusicName>{props.data.title}</MusicName>
          <MusicTheme>{props.data.theme}</MusicTheme>
        </Grid>
        <Grid item xs={1} style={{ padding: "8px" }}>
          {musicDeliveryStatus ?
            null
            :
            <IconButtonContainer onClick={handleDeletButtonClick}>
              <DeleteForeverIcon color='error' fontSize='large' />
              <IconButtonText style={{ color: "#d30b0b" }}>削除</IconButtonText>
            </IconButtonContainer>
          }
        </Grid>
        <Grid item xs={1} style={{ padding: "8px" }}>
          <IconButtonContainer onClick={handleChangeDeliveryStatus}>
            <EditIcon color={"success"} fontSize='large' />
            <IconButtonText style={{ color: "#007a2b" }}>詳細/編集</IconButtonText>
          </IconButtonContainer>
        </Grid>
        <Grid item xs={1}>
          {musicDeliveryStatus ?
            <IconButtonContainer onClick={handleChangeDeliveryStatus}>
              <PublicCustomOffIcon fontSize='large' />
              <OffIconButtonText>停止</OffIconButtonText>
            </IconButtonContainer>
            :
            <IconButtonContainer onClick={handleChangeDeliveryStatus}>
              <PublicCustomIcon fontSize='large' />
              <IconButtonText style={{ color: "#2681ff" }}>配信</IconButtonText>
            </IconButtonContainer>
          }
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{fontSize: "30px"}} id="modal-modal-title" variant="h6" component="h2">
            配信停止
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            配信を停止するとアプリ側に表示されることはなくなります。<br />
            すでに購入されてあるユーザーには表示されます。<br />
            <div style={{ display: "flex", marginTop: "150px" }}>
              <DefaultButton onClick={() => console.log("asdf")} color="red" height={"36px"} width={"100px"}>
                キャンセル
              </DefaultButton>
              <DefaultButton onClick={() => console.log("asdf")} color="green" height={"36px"} width={"100px"}>
                楽曲停止
              </DefaultButton>
            </div>
          </Typography>
        </Box>
      </Modal>
    </MusicCardContainer>
  );
}
