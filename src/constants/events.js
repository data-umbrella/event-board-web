const now = new Date()

export const eventProperties = {
  'cfpDeadline': '',
  'city': '',
  'description': '',
  'endDate': new Date(),
  'endTime': '',
  'eventName': '',
  'eventType': '',
  'imageAltText': '',
  'imageUrl': '',
  'organization': '',
  'registrationEndDate': '',
  'registrationStartDate': '',
  'startDate': new Date(),
  'startTime': '',
  'state': '',
  'timezone': '',
  'volunteeringNotes': '',
}

export const today = 'Friday July, 1, 2022';

export const MOCK_EVENT = {
  title: 'Citizen Science and Engineering',
  cfpDeadline: today,
  organizationName: 'Sustainable Progress and Equality Collective',
  cfpLink: 'https://example.com',
  registrationDeadline: today,
  startDate: today,
  endDate: today,
  startTime: '9:00 am',
  endTime: '10:00 am',
  timeZone: 'PT',
  location: 'http://video-call.link',
  discount: 'Discount: 10% off, code: 10K12DS22',
  language: 'English',
  organizationUrl: 'https://specollective.org',
  socialMediaHashTag: '#myfirstevent',
  eventType: 'Conference',
  tags: [
    'Python',
    'Data Science',
    'Startup',
    'Conference',
    'Systems Thinking',
    'Machine Learning',
  ],
  description: 'Pulvinar et tellus vitae varius vestibulum tellus et tempor accumsan. Massa eget est pharetra, ultrices et enim, est eget enim. Fermentum tempus feugiat eget elementum. Lobortis duis magna feugiat dictum et quis. At aliquet sagittis nibh sagittis faucibus imperdiet euismod ultricies quam. Volutpat platea donec porttitor eget sed pellentesque metus, eu. Facilisi scelerisque porttitor feugiat odio neque. Nibh purus sed faucibus mi aliquam morbi. Enim, libero odio risus, posuere urna. Vivamus nulla amet, egestas vulputate.',
  speakers: [
    'John Smith',
    'Jane Doe',
  ],
  volunteeringNotes: 'Rhoncus nulla venenatis diam at quis. Condimentum augue adipiscing lectus lorem et, at rhoncus eget integer. Enim diam vulputate ultrices amet at etiam pretium, ac. Facilisis egestas amet, faucibus ut nibh vitae euismod habitasse at.',
  notes: 'Rhoncus nulla venenatis diam at quis. Condimentum augue adipiscing lectus lorem et, at rhoncus eget integer. Enim diam vulputate ultrices amet at etiam pretium, ac. Facilisis egestas amet, faucibus ut nibh vitae euismod habitasse at.',
  accessibilityDetails: [
    'Closed Caption',
    'Sign Language',
    'Screen Reader',
    'Keyboard Shortcuts',
  ]
}

export const MOCK_EVENTS = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2022, 3, 0),
    end: new Date(2022, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2022, 3, 7),
    end: new Date(2022, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2022, 2, 13, 0, 0, 0),
    end: new Date(2022, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2022, 10, 6, 0, 0, 0),
    end: new Date(2022, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2022, 3, 9, 0, 0, 0),
    end: new Date(2022, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2022, 3, 11),
    end: new Date(2022, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2022, 3, 12, 10, 30, 0, 0),
    end: new Date(2022, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2022, 3, 12, 12, 0, 0, 0),
    end: new Date(2022, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2022, 3, 12, 14, 0, 0, 0),
    end: new Date(2022, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2022, 3, 12, 17, 0, 0, 0),
    end: new Date(2022, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2022, 3, 12, 20, 0, 0, 0),
    end: new Date(2022, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Planning Meeting with Paige',
    start: new Date(2022, 3, 13, 8, 0, 0),
    end: new Date(2022, 3, 13, 10, 30, 0),
  },
  {
    id: 11.1,
    title: 'Inconvenient Conference Call',
    start: new Date(2022, 3, 13, 9, 30, 0),
    end: new Date(2022, 3, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2022, 3, 13, 11, 30, 0),
    end: new Date(2022, 3, 13, 14, 0, 0),
  },
  {
    id: 11.3,
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2022, 3, 13, 15, 30, 0),
    end: new Date(2022, 3, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2022, 3, 17, 19, 30, 0),
    end: new Date(2022, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2022, 3, 17, 19, 30, 0),
    end: new Date(2022, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2022, 3, 20, 19, 30, 0),
    end: new Date(2022, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2022, 3, 14, 15, 30, 0),
    end: new Date(2022, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2022, 3, 14, 16, 30, 0),
    end: new Date(2022, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2022, 3, 14, 16, 30, 0),
    end: new Date(2022, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2022, 3, 14, 17, 30, 0),
    end: new Date(2022, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2022, 3, 14, 17, 0, 0),
    end: new Date(2022, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2022, 3, 14, 17, 0, 0),
    end: new Date(2022, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2022, 3, 14, 17, 30, 0),
    end: new Date(2022, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2022, 3, 14, 18, 30, 0),
    end: new Date(2022, 3, 14, 20, 0, 0),
  },
]

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

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
