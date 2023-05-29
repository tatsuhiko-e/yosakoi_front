import React, { useCallback, useMemo, useState, ReactNode, Fragment, Suspense, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventCalendar } from '../components/EventCalendar';
import { EventCard } from '../components/card/EventCard';
import { NavTasbs } from '../layout/NavTabs';
import { TextCheckbox } from '../components/input/CheckboxText';



const data: any[] = [
  {
    id: 1,
    event_type: 1,
    title: '江口',
    theme: '曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ曲のテーマ',
  },
  {
    id: 2,
    event_type: 2,
    title: '藤井',
    theme: 'cdcdscdsc',
  },
  {
    id: 3,
    event_type: 3,
    title: 'Joe Black',
    theme: 'Lake ParkLake ParkLake ParkLake ParkLake ParkLake ParkLake Park',
  }
];

const CheckBoxContainer = styled.div`
  margin: 32px;
`


export const EventScreen = () => {
  const [indeterminateFilter, setIndeterminateFilter] = useState(false)
  const [allFilter, setAllFilter] = useState(true)
  const [lessonFilter, setLessonFilter] = useState(true)
  const [eventFilter, setEventFilter] = useState(true)
  const [festivalFilter, setFestivalFilter] = useState(true)
  const filterList = [lessonFilter, eventFilter, festivalFilter]

  const isFilterChecked = (value: boolean) => {return value}

  const ChangeAllChecked = () => {
    if(filterList.every(isFilterChecked)){
      setLessonFilter(false)
      setEventFilter(false)
      setFestivalFilter(false)
    } else {
      setLessonFilter(true)
      setEventFilter(true)
      setFestivalFilter(true)
    }
  }

  const ChangeLessonFilterChecked = (e: any) => {
    setLessonFilter(e.target.checked)

  }

  const ChangeEventFilterChecked = (e: any) => {
    setEventFilter(e.target.checked)
  }

  const ChangeFestivalFilterChecked = (e: any) => {
    setFestivalFilter(e.target.checked)
  }

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
  },[filterList])

  return (
    <>
      <PageLayout>
        <EventCalendar
        />
        <CheckBoxContainer>
          <TextCheckbox onChange={ChangeAllChecked} indeterminate={indeterminateFilter} checked={allFilter}>{"全て"}</TextCheckbox>
          <TextCheckbox onChange={(e: ChangeEvent) => ChangeLessonFilterChecked(e)} checked={lessonFilter}>{"練習"}</TextCheckbox>
          <TextCheckbox onChange={(e: ChangeEvent) => ChangeEventFilterChecked(e)} checked={eventFilter}>{"イベント"}</TextCheckbox>
          <TextCheckbox onChange={(e: ChangeEvent) => ChangeFestivalFilterChecked(e)} checked={festivalFilter}>{"大会"}</TextCheckbox>
        </CheckBoxContainer>
        <div style={{ margin: "8px auto", padding: "16px", width: "100%", backgroundColor: "#ffffff" }}>
          {data.map((item: any, index: number) => {
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
