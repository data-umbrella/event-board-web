export const REGION_OPTIONS = [
  { label: 'North America', value: 'north-america' },
  { label: 'Europe', value: 'europe' },
  { label: 'Africa', value: 'africa' },
  { label: 'Asia', value: 'asia' },
  { label: 'Oceania', value: 'oceania' },
  { label: 'All', value: 'all' },
]

export const eventProperties = {
  'accessibilityDetails': [],
  'cfpDeadline': '',
  'city': '',
  'description': '',
  'endDate': new Date(),
  'endTime': '',
  'title': '',
  'eventType': '',
  'featured': false,
  'discountUnit': '',
  'discountCode': '',
  'discountValue': '',
  'socialMediaLinks': [],
  'imageAltText': '',
  'imageUrl': '',
  'notes': '',
  'organizationName': '',
  'organizationUrl': '',
  'registrationEndDate': '',
  'registrationStartDate': '',
  'eventRegistrationUrl': '',
  'codeOfConductUrl': '',
  'speakers': [],
  'startDate': new Date(),
  'startTime': '',
  'state': '',
  'tags': [],
  'timezone': '',
  'volunteeringNotes': '',
  'socialMediaHashTag': '',
  'discount': '',
  'location': '',
}

export const today = 'Friday July, 1, 2022';
const todayStr = new Date().toISOString().replace(/T.*$/, '');

export const CALENDAR_EVENTS = [
  {
    id: 100,
    title: 'Example All-Day Event',
    start: todayStr
  },
  {
    id: 101,
    title: 'Example Timed event',
    start: todayStr + 'T12:00:00'
  }
]

export const EVENT_TYPES = [
  { label: 'Conference', value: 'conference' },
  { label: 'Hackathon', value: 'hackathon' },
  { label: 'Meetup', value: 'meetup' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Training', value: 'training' },
  { label: 'Session', value: 'session' },
  { label: 'Webinar', value: 'webinar' },
]

export const CATEGORY_OPTIONS = [
  {
    label: 'Data Science',
    value: 'data-science',
  },
  {
    label: 'Python',
    value: 'python',
  },
  {
    label: 'Open Source',
    value: 'open-source',
  }
]

export const ACCESSIBILITY_OPTIONS = [
  { label: 'Closed Captions', value: 'closed-captions' },
  { label: 'Sign Language Interpreter', value: 'sign-language' },
  { label: 'Nursing Room', value: 'nursing-room' },
  { label: 'Screen Reader', value: 'screen-reader' },
  { label: 'Keyboard shortcuts', value: 'keyboard-shortcuts' },
  { label: 'Live transcription', value: 'live-transcription' },
]
