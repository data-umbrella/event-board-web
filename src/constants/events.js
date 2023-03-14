export const REGION_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Africa', value: 'africa' },
  { label: 'Asia', value: 'asia' },
  { label: 'Canada / USA', value: 'canada-usa' },
  { label: 'Europe', value: 'europe' },
  { label: 'Latin America', value: 'latin-america' },
  { label: 'Middle East', value: 'middle-east' },
  { label: 'Oceania', value: 'oceania' },
  { label: 'Online', value: 'online' },
];

export const eventProperties = {
  'accessibilityOptions': [],
  'cfpDeadline': '',
  'city': '',
  'codeOfConductUrl': '',
  'country': '',
  'description': '',
  'discount': '',
  'discountCode': '',
  'discountUnit': '',
  'discountValue': '',
  'endDate': new Date(),
  'endTime': '',
  'eventName': '',
  'eventType': '',
  'eventUrl': '',
  'featured': false,
  'hashTag': [],
  'id': null,
  'imageAltText': '',
  'imageFile': null,
  'imageUrl': null,
  'inPerson': false,
  'location': '',
  'eventNotes': '',
  'organizationName': '',
  'organizationUrl': '',
  'published': false,
  'region': '',
  'registrationEndDate': '',
  'registrationStartDate': '',
  'socialMediaHashTag': '',
  'socialMediaLinks': [],
  'speakers': [],
  'startDate': new Date(),
  'startTime': '',
  'state': '',
  'submitted': false,
  'tags': [],
  'timezone': '',
  'virtual': false,
  'volunteeringNotes': '',
};

export const EVENT_ATTRIBUTES = [
  'accessibility_options',
  'acronym',
  'cfp_due_date',
  'code_of_conduct_url',
  'conference_name',
  'country',
  'description',
  'description',
  'end_date',
  'end_time',
  'event_name',
  'event_notes',
  'event_type',
  'event_url',
  'featured',
  'hash_tag',
  'id',
  'image_file',
  'image_url',
  'in_person',
  'language',
  'location',
  'organization_name',
  'organization_name',
  'organization_url',
  'published',
  'region',
  'region',
  'start_date',
  'start_time',
  'submitted',
  'tags',
  'timezone',
  'virtual',
  'volunteering_notes',
  'social_media_links',
];

export const EVENT_TYPES = [
  { label: 'All', value: '' },
  { label: 'Conference', value: 'conference', tag: 'border-event-tags-conference bg-event-tags-conference' },
  { label: 'Hackathon', value: 'hackathon', tag: 'border-event-tags-hackathon bg-event-tags-hackathon' },
  { label: 'Meetup', value: 'meetup', tag: 'border-event-tags-meetup bg-event-tags-meetup' },
  { label: 'Workshop', value: 'workshop', tag: 'border-event-tags-other bg-event-tags-other' },
  { label: 'Training', value: 'training', tag: 'border-event-tags-training bg-event-tags-training' },
  { label: 'Session', value: 'session', tag: 'border-event-tags-other bg-event-tags-other' },
  { label: 'Webinar', value: 'webinar', tag: 'border-event-tags-webinar bg-event-tags-webinar' }
];

// TODO: Replace with tagging functionality
export const TOPIC_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Artificial Intelligence', value: 'ai' },
  { label: 'Bayes', value: 'bayes' },
  { label: 'Computer Vision', value: 'computer-vision' },
  { label: 'CV', value: 'cv' },
  { label: 'Data', value: 'data' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'Django', value: 'django' },
  { label: 'Education', value: 'education' },
  { label: 'Ethics', value: 'ethics' },
  { label: 'Graph', value: 'graph' },
  { label: 'Julia', value: 'julia' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'NLP', value: 'nlp' },
  { label: 'Open Source', value: 'open-source' },
  { label: 'Python', value: 'python' },
  { label: 'Research', value: 'research' },
  { label: 'RStats', value: 'rstats' },
  { label: 'Science', value: 'science' },
  { label: 'Statistics', value: 'statistics' },
  { label: 'Women-Focused', value: 'women-focused' },
]

export const ACCESSIBILITY_OPTIONS = [
  { label: 'Closed Captions', value: 'closed-captions' },
  { label: 'Sign Language Interpreter', value: 'sign-language' },
  { label: 'Nursing Room', value: 'nursing-room' },
  { label: 'Screen Reader', value: 'screen-reader' },
  { label: 'Keyboard shortcuts', value: 'keyboard-shortcuts' },
  { label: 'Live transcription', value: 'live-transcription' }
];

export const TOPIC_TYPES = [
  { label: '', value: 'none-selected' },
  { label: 'Technical Issue', value: 'technical-issue' },
  { label: 'Sponsorship', value: 'sponsorship' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' }
];



