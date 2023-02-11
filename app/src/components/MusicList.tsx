import React from 'react';
import { Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DefaultButton } from '../components/button/DefaultButton';
import { MusicListCard } from './card/MusicCard';

interface DataType {
  key: string;
  title: string;
  download: number;
  comment: string;
  detail: number;
}

const data: DataType[] = [
  {
    key: '1',
    title: 'John Brown',
    download: 32,
    comment: 'New York No. 1 Lake Park',
    detail: 12,
  },
  {
    key: '2',
    title: 'Jim Green',
    download: 42,
    comment: 'London No. 1 Lake Park',
    detail: 42,
  },
  {
    key: '3',
    title: 'Joe Black',
    download: 32,
    comment: 'Sidney No. 1 Lake Park',
    detail: 44,
  },
];

export const MusicListContainer = () => {
  return (
    <div style={{margin: "8px auto", width: "100%"}}>
      <MusicListCard data={data} />
    </div>
  );
}
