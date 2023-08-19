import client from './client';
import Cookies from "js-cookie";

// 一覧
export const getDancerList = (adminId: number) => {
  return client.get(`admin/${adminId}/dancers`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 詳細
export const getDancerDetail = (id: number) => {
  return client.get(`/dancers/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 新規作成
export const createDancer = (params: number) => {
  return client.post('/dancers', params,{
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 更新
export const updateDancer = (id: number, params: number) => {
  return client.patch(`/dancers/${id}`, params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

// 削除
export const deleteDancer = (id: number) => {
  return client.delete(`/dancers/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};
