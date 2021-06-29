const BASE_PATH = process.env.REACT_APP_API_URI;
export const endpoints = {
  base: BASE_PATH,
  login: `${BASE_PATH}/api/login`,
  register: `${BASE_PATH}/api/register`,
};
