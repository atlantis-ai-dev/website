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

export function verifyEmail(token) {
  return apiClient(`/auth/confirm-email?token=${encodeURIComponent(token)}`, {
    method: 'GET',
  });
}

export function resendVerificationEmail({ email }) {
  return apiClient('/auth/verify-email', {
    method: 'POST',
    body: { email },
  });
}

export function confirmEmail(token) {
  return apiClient(`/auth/confirm-email?token=${encodeURIComponent(token)}`, {
    method: 'GET',
  });
}