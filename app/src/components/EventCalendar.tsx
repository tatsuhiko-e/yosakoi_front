import React, { useCallback, useMemo, useState, ReactNode, Fragment, useEffect } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// FullCalendarで週表示を可能にするモジュール。
import timeGridPlugin from '@fullcalendar/timegrid'

const StyledFullCalendar = styled(FullCalendar)`

`;


const PageContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
  margin: 16px;
  padding: 16px;
  height: auto;
  display: block;
  margin: auto;
  background-color: #fff;
  .fc-direction-ltr .fc-daygrid-event.fc-event-end, .fc-direction-rtl .fc-daygrid-event.fc-event-start {
    margin-right: 2px;
    color: #1f1f1f;
    background: #3aa635;
  }
  .fc-day {
  height: 20px; /* 好みの高さに設定してください */
}
`

export const EventCalendar = (props: any) => {
  const [events, setEvents]: any = useState([])
  const handleDateClick = (arg: any) => { // bind with an arrow function
    console.log(arg.event.title)
  }

  return (
    <PageContainer>
      <StyledFullCalendar
        events={props.data}
        locale="ja"// ロケール設定。
        plugins={[timeGridPlugin, dayGridPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
        initialView="dayGridMonth" // カレンダーの初期表示設定。この場合、週表示。
        slotDuration="00:30:00"// 週表示した時の時間軸の単位。
        selectable={true} // 日付選択を可能にする。interactionPluginが有効になっている場合のみ。
        businessHours={{ // ビジネス時間の設定。
          daysOfWeek: [1, 2, 3, 4, 5], // 0:日曜 〜 7:土曜
          startTime: '00:00',
          endTIme: '24:00'
        }}
        eventColor={'#bd4646'}
        eventClick={handleDateClick}
        weekends={true} // 週末を強調表示する。
        aspectRatio={2.5}
        headerToolbar={{ // カレンダーのヘッダー設定。(詳細は後述。※2)
          start: 'title',
          center: 'prev, next, today',
          end: 'dayGridMonth,timeGridWeek'
        }}
      />
    </PageContainer>
  );
}
