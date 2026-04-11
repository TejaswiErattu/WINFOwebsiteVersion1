/* ===================================================================
   Winners data — used on the Hackathon page
   ===================================================================
   HOW TO UPDATE
   • Change `heading` to the current hackathon year
   • Add / remove winner objects in `cards`
   • Add a `demoUrl` or `repoUrl` when teams share links
   • Replace `image` placeholders with real project screenshots
   =================================================================== */

export const winnersData = {
  heading: '14th Hackathon Winners',
  cards: [
    {
      placement: '🥇 1st Place',
      team: 'Team AccessAI',
      project: 'An AI-powered accessibility tool for campus navigation.',
      tier: 'gold',
      emoji: '🏆',
      image: '',     // TODO: '/images/hackathon/winners/accessai.jpg'
      imageAlt: 'Team AccessAI demo screenshot',
      demoUrl: '#',  // TODO: replace with live demo link
    },
    {
      placement: '🥈 2nd Place',
      team: 'GreenLoop',
      project: 'Sustainable food-sharing app for college students.',
      tier: 'silver',
      emoji: '🌿',
      image: '',     // TODO: '/images/hackathon/winners/greenloop.jpg'
      imageAlt: 'GreenLoop demo screenshot',
      demoUrl: '#',
    },
    {
      placement: '🥉 3rd Place',
      team: 'StudyBuddy',
      project: 'Peer-matching platform for collaborative study sessions.',
      tier: 'bronze',
      emoji: '📚',
      image: '',     // TODO: '/images/hackathon/winners/studybuddy.jpg'
      imageAlt: 'StudyBuddy demo screenshot',
      demoUrl: '#',
    },
    {
      placement: '✨ Best Design',
      team: 'PixelCare',
      project: 'Mental-health journal with mood tracking and gentle nudges.',
      tier: 'special',
      emoji: '🎨',
      image: '',     // TODO: '/images/hackathon/winners/pixelcare.jpg'
      imageAlt: 'PixelCare demo screenshot',
      demoUrl: '#',
    },
  ],
};
