import React from 'react';
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

type IconButtonProps = {
  onClick: any,
  platform: "instagram" | "twitter" | "facebook" | "youtube"
}

export const SnsIconButton = (props: IconButtonProps) => {

  let icon: any = null
  let color: string | null = null
  switch (props.platform) {
    case "instagram":
      icon = InstagramIcon
      color = "linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat"
      break;
    case "twitter":
      icon = TwitterIcon
      color = "#1DA1F2"
      break;
    case "facebook":
      icon = FacebookIcon
      color = "#3B5998"
      break;
    case "youtube":
      icon = YouTubeIcon
      color = "#c4302b"
      break;
  }

  const SnsIcon = styled(icon)`
    color: #fff;
    text-align: center;
  `

  const IconButtonContainer = styled.button`
    width: 60%;
    height: 45px;
    margin: auto;
    border: none;
    background: ${color};
  `

  return (
    <IconButtonContainer onClick={props.onClick}>
      <SnsIcon fontSize={"large"} />
    </IconButtonContainer>
  );
}
