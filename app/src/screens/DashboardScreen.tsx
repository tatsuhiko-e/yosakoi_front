import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import { Grid } from '@mui/material';
import { Select, Avatar, Button, List, Skeleton, Checkbox } from 'antd';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DefaultButton } from '../components/button/DefaultButton';
import { TextCheckbox } from '../components/input/CheckboxText';
import { SnsIconButton } from '../components/button/SnsIconButton';
import { DefaultInputForm } from '../components/input/DefaultInputForm';
import { Controller, useForm } from 'react-hook-form';
import { MusicAddCard } from '../components/card/AddMusicCard';
import { DancerCard } from '../components/card/DancerCard';
import { getDancerList } from '../lib/api/dancer';

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
  height: 380px;
  padding: 32px;
  background-color: #ffffff;
`

const TeamIntroductionContainer = styled.div`
  width: 90%;
  height: 230px;
  margin: 0 auto;
  background-color: #ececec;
`

const TeamHomePageContainer = styled.div`
  width: 90%;
  height: 48px;
  margin: 32px auto;
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
  const [dancersData, setDancersData] = useState<DataType[]>([]);

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


  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }

  const loadDancersData = async () => {
    try {
      const res = await getDancerList(1);
      console.log(res.data);
      setDancersData(res.data);
      console.log("asdsd")
    }
    catch (e) {
      console.log(e)
    };
  }

  useEffect(() => {
    loadDancersData();
  }, []);



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

          <Grid item xs={4}>
            <DashboardItem>
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
          <Grid item xs={12}>
          <div style={{ margin: "8px auto", padding: "16px", width: "100%", backgroundColor: "#ffffff" }}>
              {dancersData.map((item: any, index: number) => {
                return (
                    <DancerCard data={item} key={index}  />
                )
              })}
          </div>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
}
