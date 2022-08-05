export const today = 'Friday July, 1, 2022';
const todayStr = new Date().toISOString().replace(/T.*$/, '');

export const REGION_OPTIONS = [
  { label: 'North America', value: 'north-america' },
  { label: 'Europe', value: 'europe' },
  { label: 'Africa', value: 'africa' },
  { label: 'Asia', value: 'asia' },
  { label: 'Oceania', value: 'oceania' },
  { label: 'All', value: 'all' },
]

export const eventProperties = {
  'id': null,
  'accessibilityOptions': [],
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
  'imageFile': '',
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
  'published': false,
}

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

export const EVENT_ATTRIBUTES = [
  'id',
  // Required fields
  'title',
  'description',
  'organization_name',
  'event_type',
  'description',
  'featured',
  'published',
  // Dates
  'start_date',
  'end_date',
  'start_time',
  'end_time',
  'cfp_due_date',
  // Meta data
  'acronym',
  'code_of_conduct_url',
  'conference_name',
  'event_url',
  'hash_tag',

  'language',
  'location',
  'region',

  'organization_name',
  'organization_url',

  'virtual',
  'in_person',

  'accessibility_options',
  'volunteer_notes',
  'event_notes',

  'image_file',
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

export const TOPIC_TYPES = [
  { label: 'Please select below', value: 'none-selected' },
  { label: 'Technical Issue', value: 'technical-issue' },
  { label: 'Sponsorship', value: 'sponsorship' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]



