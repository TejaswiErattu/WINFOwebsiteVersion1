/* ===================================================================
   Events calendar — the only file to edit each quarter
   ===================================================================
   HOW TO UPDATE (takes ~5 minutes a quarter)
   1. Change `quarter` below: its name and the last day of finals.
   2. Replace `events` with the new quarter's events. One line each:
        { title: 'Event name', date: 'YYYY-MM-DD', time: '5–7 PM',
          building: 'MGH', room: '254', blurb: 'optional one-liner' },
   3. Using a building that isn't in `buildings` yet? Add its code and
      full name there so the map link finds the right place.

   The site does the rest by itself:
   • events that already happened disappear the day after
   • events after the quarter's end date stay hidden until you change it
   • the location links open Google Maps (the Maps app on phones)
   =================================================================== */

export const quarter = {
  name: 'Autumn 2026',
  /* Last day of finals week. Events after this date are not shown. */
  endsOn: '2026-12-11',
};

export const events = [
  {
    title: 'WINFO Fall General Meeting',
    date: '2026-10-21',
    time: '5–7 PM',
    building: 'DEN',
    room: '258',
    blurb: 'Pumpkin painting!',
  },
  {
    title: 'Warmly Lit DIY Lanterns',
    date: '2026-10-26',
    time: '5:30–7 PM',
    building: 'MGH',
    room: '254',
  },
  {
    title: 'UWiB Closing the Gap',
    date: '2026-11-03',
    time: '6–8 PM',
    building: 'DEM',
    room: '302',
    blurb: 'Hosted with UW Women in Business.',
  },
  {
    title: 'Crumbs & Connections: Fall Cookie Decorating',
    date: '2026-11-04',
    time: '5–7 PM',
    building: 'DEN',
    room: '212',
  },
  {
    title: 'Spookie Clay & Chat',
    date: '2026-11-10',
    time: '5–7 PM',
    building: 'HUB',
    room: '214',
  },
  {
    title: 'WINFO Speed Mentoring',
    date: '2026-11-12',
    time: '5–7 PM',
    building: 'HUB',
    room: '214',
  },
];

/* UW building codes → full names (used for the label and the map search) */
export const buildings = {
  ARC: 'Architecture Hall',
  BAG: 'Bagley Hall',
  CDH: 'Condon Hall',
  CSE: 'Paul G. Allen Center',
  CSE2: 'Bill & Melinda Gates Center',
  DEM: 'Dempsey Hall',
  DEN: 'Denny Hall',
  EEB: 'Electrical & Computer Engineering Building',
  GUG: 'Guggenheim Hall',
  GWN: 'Gowen Hall',
  HUB: 'Husky Union Building',
  JHN: 'Johnson Hall',
  KNE: 'Kane Hall',
  MGH: 'Mary Gates Hall',
  MOR: 'Moore Hall',
  NAN: 'Nanoengineering & Sciences Building',
  OUG: 'Odegaard Undergraduate Library',
  PCAR: 'PACCAR Hall',
  SAV: 'Savery Hall',
  SMI: 'Smith Hall',
  SUZ: 'Suzzallo Library',
  THO: 'Thomson Hall',
};
