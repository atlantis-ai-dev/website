import apiClient from './apiClient';

export function login({ email, password }) {
    return apiClient('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
  }

  export function register({ username, email, password }) {
    return apiClient('/auth/register', {
      method: 'POST',
      body: { username, email, password },
    });
  }

