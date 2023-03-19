import {
  makeRequest,
  createEvent,
  updateEvent,
  submitEvent,
} from 'services/events'
import { EVENTS_URL } from 'constants/urls';

describe('makeRequest', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockReset();
    delete global.fetch;
  });

  it('makes a request and returns parsed JSON', async () => {
    const url = 'https://example.com/api';
    const options = { method: 'GET' };
    const mockResponse = { foo: 'bar' };
    fetchMock.mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await makeRequest(url, options);

    expect(fetchMock).toHaveBeenCalledWith(url, { credentials: 'include', ...options });
    expect(result).toEqual(mockResponse);
  });

  it('throws an error if the response status is not 200, 201 or 204', async () => {
    const url = 'https://example.com/api';
    const options = { method: 'POST' };
    fetchMock.mockResolvedValueOnce({
      status: 400,
      json: jest.fn(),
    });

    await expect(makeRequest(url, options)).rejects.toThrowError('Bad Request');
  });
});

describe('createEvent', () => {
  let fetchMock;
  let body = { eventName: 'Test Event' };

  beforeEach(() => {
    fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(body),
      status: 200,
    })
  );
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockReset();
    delete global.fetch;
  });

  it('sends a POST request to the events API', async () => {
    const response = await createEvent(body);
    expect(fetchMock).toHaveBeenCalledWith(
      EVENTS_URL,
      {
        "body": expect.anything(),
        "credentials": "include",
        "method": "POST"
      },
    );
    expect(response).toEqual(body);
  });
});

describe('updateEvent', () => {
  let fetchMock;
  let body = { id: 1, eventName: 'Test Event' };

  beforeEach(() => {
    fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(body),
      status: 200,
    })
  );
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockReset();
    delete global.fetch;
  });

  it('sends a PUT request to the events API', async () => {
    const response = await updateEvent(body.id, body);
    expect(fetchMock).toHaveBeenCalledWith(
      `${EVENTS_URL}/${body.id}/`,
      {
        body: expect.anything(),
        credentials: 'include',
        method: 'PUT',
      },
    );
    expect(response).toEqual(body);
  });
});

describe('submitEvent', () => {
  let fetchMock;
  let body = { id: 1, eventName: 'Test Event' };

  beforeEach(() => {
    fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ ...body, submitted: true }),
      status: 200,
    })
  );
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockReset();
    delete global.fetch;
  });

  it('sends a PATCH request to the events API', async () => {
    const response = await submitEvent(body.id);
    expect(fetchMock).toHaveBeenCalledWith(
      `${EVENTS_URL}/${body.id}/`,
      {
        body: JSON.stringify({ submitted: true }),
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    expect(response).toEqual({ ...body, submitted: true });
  });
});
