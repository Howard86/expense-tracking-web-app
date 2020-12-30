const fetcher = <T>(endpoint: string, token: string): Promise<T> =>
  fetch(`/api/${endpoint}`, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

export default fetcher;
