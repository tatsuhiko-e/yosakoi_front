import React, { useCallback, useMemo, useState, ReactNode, Fragment, Suspense, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventCalendar } from '../components/EventCalendar';
import { EventCard } from '../components/card/EventCard';
import { NavTasbs } from '../layout/NavTabs';
import { TextCheckbox } from '../components/input/CheckboxText';

type EventType = {
  admin_id: number;
  start: string;
  end: string;
  event_type: number;
  title: String;
  area: String;
}

const CheckBoxItem = [
  "練習",
  "イベント",
  "大会"
]

const data: EventType[] = [
  {
    admin_id: 0,
    start: "2023-06-01 15:00:00",
    end: "2023-06-01 15:00:00",
    event_type: 1,
    title: "タイトル1",
    area: "東京",
  },
  {
    admin_id: 1,
    start: "2023-06-01 15:00:00",
    end: "2023-06-01 15:00:00",
    event_type: 2,
    title: "タイトル2",
    area: "東京",
  },
  {
    admin_id: 1,
    start: "2023-06-01 15:00:00",
    end: "2023-06-01 15:00:00",
    event_type: 2,
    title: "タイトル",
    area: "東京",
  }
];

const CheckBoxContainer = styled.div`
  margin: 32px;
`

export const EventScreen = () => {
  const [eventData, setEventData]: any = useState([])
  const [filterData, setFilterData]: any = useState([])
  const [indeterminateFilter, setIndeterminateFilter] = useState(false)
  const [allFilter, setAllFilter] = useState(true)
  const [lessonFilter, setLessonFilter] = useState(true)
  const [eventFilter, setEventFilter] = useState(true)
  const [festivalFilter, setFestivalFilter] = useState(true)
  const filterList = [lessonFilter, eventFilter, festivalFilter]

  const ChangeAllChecked = () => {
    if(filterList.every((value: boolean) => {return value})){
      setLessonFilter(false)
      setEventFilter(false)
      setFestivalFilter(false)
    } else {
      setLessonFilter(true)
      setEventFilter(true)
      setFestivalFilter(true)
    }
  }

  const setData = (data: EventType[]) => {
    console.log("data")
    console.log(data)
    console.log("data")
  }

  useEffect(() => {
    const data: EventType[] = [
      {
        admin_id: 0,
        start: "2023-06-01 15:00:00",
        end: "2023-06-01 15:00:00",
        event_type: 1,
        title: "タイトル1",
        area: "東京",
      },
      {
        admin_id: 1,
        start: "2023-06-01 15:00:00",
        end: "2023-06-01 15:00:00",
        event_type: 2,
        title: "タイトル2",
        area: "東京",
      },
      {
        admin_id: 1,
        start: "2023-06-01 15:00:00",
        end: "2023-06-01 15:00:00",
        event_type: 2,
        title: "タイトル",
        area: "東京",
      }
    ];
    setData(data)
    console.log(filterData)
  },[data])

  useEffect(() => {
    let filterCount: number = 0
    filterList.map((value: boolean)=>{
      if(value){
        filterCount += 1
      }
    })
    if(filterCount === 3){
      setAllFilter(true);
      setIndeterminateFilter(false)
    } else if(filterCount > 0){
      setAllFilter(false)
      setIndeterminateFilter(true);
    } else {
      setAllFilter(false)
      setIndeterminateFilter(false)
    }
    // console.log(eventData)
    const numberFilterList: (number | null)[] = filterList.map((val, index) => val ? index : null)
    const result = eventData ? eventData.filter((value: EventType)=> numberFilterList.includes(value.event_type)): []
    setFilterData(result)
    console.log(eventData)
  }, filterList)

  console.log(filterData)
  return (
    <>
      <PageLayout>
        <EventCalendar
          data={filterData}
        />
        <CheckBoxContainer>
          <TextCheckbox onChange={ChangeAllChecked} indeterminate={indeterminateFilter} checked={allFilter}>{"全て"}</TextCheckbox>
          <TextCheckbox onChange={(e: any) => setLessonFilter(e.target.checked)} checked={lessonFilter}>{"練習"}</TextCheckbox>
          <TextCheckbox onChange={(e: any) => setEventFilter(e.target.checked)} checked={eventFilter}>{"イベント"}</TextCheckbox>
          <TextCheckbox onChange={(e: any) => setFestivalFilter(e.target.checked)} checked={festivalFilter}>{"大会"}</TextCheckbox>
        </CheckBoxContainer>
        <div style={{ margin: "8px auto", padding: "16px", width: "100%", backgroundColor: "#ffffff" }}>
          {filterData.map((item: any, index: number) => {
            return (
              <Suspense fallback={<div>...Loading</div>}>
                <EventCard data={item} key={index} />
              </Suspense>
            )
          })}
        </div>
      </PageLayout>
    </>
  );
}
