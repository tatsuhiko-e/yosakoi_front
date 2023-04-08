import React, { useCallback, useMemo, useState, ReactNode, Fragment } from 'react';
import styled from 'styled-components'
import { MusicAddCard } from '../components/card/AddMusicCard';
import { MusicListCard } from '../components/card/MusicCard';
import { MusicPostCard } from '../components/card/MusicPostCard';
import PageLayout from '../layout/Header';

interface DataType {
  id: number;
  title: string;
  theme: string;
}

const data: DataType[] = [
  {
    id: 1,
    title: 'John Brown',
    theme: '曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ',
  },
  {
    id: 2,
    title: 'Jim Green',
    theme: 'London No. 1London No. 1London No. 1London No. 1London No. 1London No. 1',
  },
  {
    id: 3,
    title: 'Joe Black',
    theme: 'Lake ParkLake ParkLake ParkLake ParkLake ParkLake ParkLake Park',
  },
];

export const MusicScreen = () => {
  const [musicPostCardOpen, setMusicPostCardOpen] = useState(false);

  const handleChangePostCardOpenFlag = () => {
    setMusicPostCardOpen(!musicPostCardOpen)
  }

  return (
    <>
      <PageLayout>
        {
          !musicPostCardOpen ?
            <div style={{ margin: "8px auto", width: "100%" }}>
              <MusicAddCard onClick={handleChangePostCardOpenFlag} />
              {data.map((item: any, index: number) => {
                return (
                  <MusicListCard data={item} key={index} />
                )
              })}
            </div>
            :
            <div style={{ margin: "8px auto", width: "100%" }}>
              <MusicPostCard onClick={handleChangePostCardOpenFlag} />
            </div>
        }
      </PageLayout>
    </>
  );
}
