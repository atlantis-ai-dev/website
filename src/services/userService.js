import apiClient from './apiClient';

export function updateUser({ id, email, username }) {
    return apiClient(`/users/${id}`, {
      method: 'PUT',
      body: { email, username },
    });
  }

/**
 * Change the user’s password
 * PATCH /users/:id/password
 */
export function updatePassword({ id, oldPassword, newPassword }) {
    return apiClient(`/users/${id}/password`, {
      method: 'PUT',
      body: { oldPassword, newPassword },
    });
  }