import { isEmptyObject } from './checkerFunc';

export const API_BASE_URL = 'http://api.soppiya.com/v2.1';
// furnish theme businessID
export const BUSINESS_ID = '62afdaa923d7c7689d2706b7';
// export const BUSINESS_ID = '618204df2d43d472f32ed77a';
export const IMG_BASE_URL = `https://www.soppiya.com/media/images/${BUSINESS_ID}`;
export async function getData(url, token) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        businessId: BUSINESS_ID,
        ...(token && { token }),
      },
    });
    return response.json();
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
export async function postData(url, token, body) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        businessId: BUSINESS_ID,
        ...(token && { token }),
      },
      body,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
export async function checkToken(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/account/get`, {
      headers: {
        businessId: BUSINESS_ID,
        token,
      },
    });
    const user = await response.json();
    if (user.Error || isEmptyObject(user)) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
