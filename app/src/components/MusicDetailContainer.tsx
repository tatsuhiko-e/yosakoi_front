import React from 'react';
import { Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DefaultButton } from '../components/button/DefaultButton';
import { ItemListBox } from './ItemListBox';

interface DataType {
  key: string;
  title: string;
  download: number;
  comment: string;
  detail: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'タイトル',
    dataIndex: 'title',
    key: 'title',
    width: "20%",
  },
  {
    title: 'ダウンロード数',
    dataIndex: 'download',
    key: 'download',
    width: "10%",
  },
  {
    title: '最新コメント',
    dataIndex: 'comment',
    key: 'comment',
    width: "60%",
  },
  {
    title: '',
    dataIndex: 'detail',
    key: 'detail',
    width: "10%",
    render: () => <DefaultButton color={"green"} onClick={()=>console.log("adadsfa")}>詳細</DefaultButton>,
  },
];

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

export const MusicDetailContainer = () => {
  return (
    <div style={{marginTop: "16px"}}>
      <Table size={"large"} columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}
