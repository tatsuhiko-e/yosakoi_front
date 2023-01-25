import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';

type IconButtonProps = {
  children: string,
  onClick: any,
  color?: string,
}

const StyleButton = styled.button<{color: string}>`
  width: 100px;
  height: 45px;
  margin: auto;
  background-color: ${(props) => props.color};
`

export const IconButton = (props: IconButtonProps) => {
  return (
    <StyleButton onClick={props.onClick} color={"red"}>
      {props.children}
    </StyleButton>
  );
}
