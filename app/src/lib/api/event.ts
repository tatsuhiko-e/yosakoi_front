import client from './client';
import Cookies from "js-cookie";

// 一覧
export const getEventList = () => {
  return client.get('/events', {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 詳細
export const getEventDetail = (id: number) => {
  return client.get(`/events/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 新規作成
export const createEvent = (params: number) => {
  return client.post('/events', params,{
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 更新
export const updateEvent = (id: number, params: number) => {
  return client.patch(`/events/${id}`, params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 削除
export const deleteEvent = (id: number) => {
  return client.delete(`/events/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};
