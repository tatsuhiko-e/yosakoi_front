import styled from 'styled-components'
import MusicNoteIcon from '@mui/icons-material/MusicNote';


type IconButtonProps = {
  onClick: any,
}

const IconButtonContainer = styled.button`
  display: flex;
  width: 300px;
  height: 46px;
  margin: auto;
  border: none;
  background-color: #e2ad3b;
  border-radius: 8px;
`

const Icon = styled(MusicNoteIcon)`
  background-color: ${(props) => props.color};
  color: #fff;
  margin: auto 8px auto auto;
`

const IconButtonText = styled.div`
  font-size: 21px;
  color: #fff;
  font-weight: bold;
  margin: auto auto auto 8px;
`

export const UploadButton = (props: IconButtonProps) => {
  return (
    <IconButtonContainer onClick={props.onClick}>
      <Icon fontSize={"large"} />
      <IconButtonText>アップロード</IconButtonText>
    </IconButtonContainer>
  );
}
