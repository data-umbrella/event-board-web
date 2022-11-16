import { WEEKLY_DIGESTS_URL } from 'constants/urls';

export async function postWeeklyDigestEmail(data) {
  const response = await fetch(WEEKLY_DIGESTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    return true;
  } else {
    return response.json();
  }
}


export async function unsubscribeWeeklyDigestEmail(data) {
  const response = await fetch(WEEKLY_DIGESTS_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    return true;
  } else {
    return response.json();
  }
}
