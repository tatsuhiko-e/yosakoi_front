import client from './client';
import Cookies from 'js-cookie';

export const signUp = (params: any) => {
  return client.post('/admin', params);
};

export const signIn = (params: any) => {
  return client.post('/admin/sign_in', params);
};

export const signOut = () => {
  return client.delete('/admin/sign_out', {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

export const getCurrentUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return;
  return client.get('/admin/sessions', {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};
