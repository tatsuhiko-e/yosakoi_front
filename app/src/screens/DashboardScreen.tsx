import { useEffect, useState } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import { Grid } from '@mui/material';
import { Select, Avatar, Button, List, Skeleton, Checkbox } from 'antd';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { MusicDetailContainer } from '../components/MusicDetailContainer';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DefaultButton } from '../components/button/DefaultButton';
import { TextCheckbox } from '../components/input/CheckboxText';

ChartJS.register(...registerables);

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const TeamDetailContainer = styled.div`
  width: 100%;
  height: 380px;
  padding: 32px;
  margin-bottom: 16px;
  background-color: #ffffff;
`

const TeamImageContainer = styled.div`
  width: 260px;
  height: 260px;
  padding: 32px;
  margin: 0 auto;
  background-color: #ececec;
`

const TeamNameText = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`

const DashboardItem = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffffff;
`

const TeamIntroductionContainer = styled.div`
  width: 90%;
  height: 220px;
  margin: 0 auto;
  background-color: #ececec;
`

const ProceedsText = styled.div`
  font-size: 40px;
  text-align: right;
  margin: 16px 32px;
`

const Option = Select.Option;

const ProceedsChartContainer = styled.div`
  width: 90%;
  height: 240px;
  margin: 0 auto;
`

const GenderChartContainer = styled.div`
  width: 75%;
  height: 240px;
  margin: 36px auto;
`

const DownloadChartContainer = styled.div`
  width: 90%;
  height: 300px;
  margin: 0 auto;
`

export const DashboardScreen = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const [membersWanted, setMembersWanted] = useState(false);
  const [experienceSession, setExperienceSession] = useState(false);
  const [snsDisplayButton, setMembersWantedButton] = useState(false);

  const labels = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const options: {} = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const genderLabels = ["男性", "女性", "不明"];
  const genderData = {
    labels: genderLabels,
    datasets: [
      {
        data: [165, 59, 60],
        borderColor: ["rgb(75, 192, 192)", "rgb(224, 146, 196)", "rgb(186, 186, 186)"],
        backgroundColor: ["rgb(199, 255, 255)", "rgb(255, 228, 245)", "rgb(226, 226, 226)"],
      },
    ],
  };
  const genderOptions: {} = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        display: true,
      },
    },
  };

  const downloadLabels = ["桜華爛漫", "麗華夢繋", "月華千秋", "精華嫋嫋", "ふうしかでン", "封印画化"];
  const downloadData = {
    labels: downloadLabels,
    datasets: [
      {
        data: [39, 59, 60, 79, 131, 229],
        borderColor: ["rgb(75, 192, 192)", "rgb(224, 146, 196)", "rgb(198, 255, 200)", "rgb(241, 255, 163)", "rgb(101, 175, 85)"],
        backgroundColor: ["rgb(138, 238, 238)", "rgb(248, 180, 223)", "rgb(229, 255, 230)", "rgb(249, 255, 218)", "rgb(149, 219, 134)"],
      },
    ],
  };
  const downloadOptions: {} = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }

  const musics: any[] = [
    "aaaaa",
    "bbbbb"
  ]

  const onChangeMembersWantedButton = (e: CheckboxChangeEvent) => {
    console.log(e.target.checked);
    setMembersWantedButton(e.target.checked)
  };

  const onChangeExperienceSessionButton = (e: CheckboxChangeEvent) => {
    console.log(e.target.checked);
    setMembersWantedButton(e.target.checked)
  };

  const onChangeSnsDisplayButton = (e: CheckboxChangeEvent) => {
    console.log(e.target.checked);
    setMembersWantedButton(e.target.checked)
  };

  const displayButtonOnSubmit = () => {
    console.log("保存しました");
  };

  return (
    <>
      <PageLayout>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TeamDetailContainer>
              <TeamImageContainer>
              </TeamImageContainer>
              <TeamNameText>
                Rey華繚乱
              </TeamNameText>
            </TeamDetailContainer>
          </Grid>
          <Grid item xs={8}>
            <TeamDetailContainer>
              <TeamIntroductionContainer>
              </TeamIntroductionContainer>
              <Grid container spacing={2} style={{width: "90%", margin: "0 auto"}}>
                <Grid item xs={6}>
                  <TextCheckbox onChange={onChangeMembersWantedButton}>メンバー募集ボタンを表示</TextCheckbox>
                </Grid>
                <Grid item xs={6}>
                  <TextCheckbox onChange={onChangeExperienceSessionButton}>体験会参加ボタンを表示</TextCheckbox>
                </Grid>
                <Grid item xs={6}>
                  <TextCheckbox onChange={onChangeSnsDisplayButton}>SNSボタンを表示</TextCheckbox>
                </Grid>
                <Grid item xs={6} style={{textAlign:"right", paddingRight: "50px"}}>
                  <DefaultButton onClick={displayButtonOnSubmit} color={"green"}>保存</DefaultButton>
                </Grid>
              </Grid>
            </TeamDetailContainer>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DashboardItem>
              <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number) =>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
              <ProceedsChartContainer>
                <Line
                  style={{ width: "65", height: "70" }}
                  data={graphData}
                  options={options}
                  id="chart-key"
                />
              </ProceedsChartContainer>
              <ProceedsText>0 JPY</ProceedsText>
            </DashboardItem>
          </Grid>
          <Grid item xs={4}>
            <DashboardItem>
              <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number) =>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
              <DownloadChartContainer>
                <Bar
                  style={{ width: "65", height: "70" }}
                  data={downloadData}
                  options={downloadOptions}
                  id="chart-key"
                />
              </DownloadChartContainer>
            </DashboardItem>
          </Grid>
          <Grid item xs={4}>
            <DashboardItem>
              <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number) =>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
              <GenderChartContainer>
                <Pie
                  style={{ width: "65", height: "70" }}
                  data={genderData}
                  options={genderOptions}
                  id="chart-key"
                />
              </GenderChartContainer>
            </DashboardItem>
          </Grid>
        </Grid>
          <MusicDetailContainer></MusicDetailContainer>
      </PageLayout>
    </>
  );
}
