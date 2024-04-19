import { BASE_URL } from '../constants';
import { UserCredential } from '../types';

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential> => {
  const response = await fetch(BASE_URL + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Something went wrong');
  }
};


export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential> => {
  const response = await fetch(BASE_URL + '/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Something went wrong');
  }
};