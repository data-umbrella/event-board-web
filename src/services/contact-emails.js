import { CONTACT_EMAILS_URL } from 'constants/urls';

export async function postContactEmail(data) {
  const response = await fetch(CONTACT_EMAILS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}
