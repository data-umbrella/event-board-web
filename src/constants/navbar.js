export const NAVBAR_EVENT_OPTIONS = [
  { label: 'Event Calendar', value: 'event-calendar', route: '/events/calendar' },
  { label: 'Post Event', value: 'post-event', route: '/events/new' },
  { label: 'Weekly Digest', value: 'weekly-digest', route: '/events/weekly-digest' },
]
  
export const NAVBAR_SUPPORT_OPTIONS = [
  { label: 'Sponsors', value: 'sponsors', route: '/sponsors' },
]
export const NAVBAR_PROFILE_OPTIONS = [
  {
    label: "Profile",
    value: "profile",
    route: "/settings",
  },
  {
    label: "Sign Out",
    value: "sign-out",
    route: "/sign-in",
    onclick: () => console.log("sign out complete"),
    // const signOut = () => auth.signOutCurrentUser();
  },
];
