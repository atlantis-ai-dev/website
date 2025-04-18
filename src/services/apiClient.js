const baseURL = process.env.REACT_APP_BASE_URL || '';

/**
 * A small wrapper around fetch to handle JSON + errors + cookies.
 * @param {string} endpoint  — e.g. '/auth/login'
 * @param {object} options   — { method, body, headers }
 */
export default async function apiClient(endpoint, { method = 'GET', body, headers = {} } = {}) {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      credentials: 'include', // send cookies if your backend sets them
    };
  
    if (body) {
      config.body = JSON.stringify(body);
    }
  
    const res = await fetch(`${baseURL}/api${endpoint}`, config);
  
    if (!res.ok) {
      // try to parse a useful error message
      let errorMsg = 'Something went wrong';
      try {
        const errBody = await res.json();
        errorMsg = errBody.message || errorMsg;
      } catch (_) {}
      throw new Error(errorMsg);
    }
  
    return res.json();
  }