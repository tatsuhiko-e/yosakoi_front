import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { DefaultInputForm } from '../input/DefaultInputForm';
import { DefaultTextArea } from '../input/DefaultinputTextArea';
import { UploadButton } from '../button/UploadButton';
import { DefaultButton } from '../button/DefaultButton';
import ClearIcon from '@mui/icons-material/Clear';

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

export const MusicPostCard = (props: any) => {
  const [newMusicTitle, setNewMusicTitle] = useState("")
  const [newMusicDate, setNewMusicDate] = useState("")
  const [newMusicTheme, setNewMusicTheme] = useState("")
  const [audio, setAudio] = useState<any>(null)
  const [open, setOpen] = React.useState(false);
  const handleOpen = (active: boolean, item: any) => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const MusicCardContainer = styled.div`
    padding: 32px;
    margin: 16px auto;
    width: 96%;
    height: 450px;
    border: 1px solid #888888;
    box-shadow: 1px 5px 5px 1px #999;
  `

  const selectAudio = (e: any) => {
    const selectedAudio = e.target.files[0]
    setAudio(selectedAudio)
  }

  const inputRef: any = useRef(null);

  const onFileInputChange = (event: any) => {
    console.log(event.target.files[0]);
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };


  return (
    <MusicCardContainer>
      <Grid container spacing={2} style={{ width: "90%", margin: "0 auto" }}>
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <ClearIcon onClick={props.onClick} sx={{fontSize: 40}} />
        </Grid>
        <Grid item xs={4}>
          <DefaultInputForm onChange={props.onChange} value={props.value}>楽曲名＊</DefaultInputForm>
        </Grid>
        <Grid item xs={4}>
          <DefaultInputForm onChange={props.onChange} value={props.value}>披露年＊</DefaultInputForm>
        </Grid>
        <Grid item xs={4}>
          <DefaultInputForm onChange={props.onChange} value={props.value}>チーム名(変更がある場合)</DefaultInputForm>
        </Grid>
        <Grid item xs={8}>
          <DefaultTextArea onChange={props.onChange} children={"テーマ＊"}  value={props.value} />
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3} style={{marginTop: "24px"}}>
          <UploadButton onClick={fileUpload} />
          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
          />
        </Grid>
        <Grid item xs={8} style={{marginTop: "24px", textAlign: "right"}}>
          <DefaultButton onClick={()=> console.log("submit")} color={"green"} height={"46px"} width={"200px"}>送信</DefaultButton>
        </Grid>
      </Grid>
    </MusicCardContainer>
  );
}
