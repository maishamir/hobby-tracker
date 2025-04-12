const hobbies = [
  {
    id: 'knitting',
    name: 'Knitting',
    bgColor: 'purple',
    icon: '🧶',
    projects: [
      {
        id: 'kn1',
        name: 'Florence Miller Raglan Sweater',
        status: 'Paused',
        hoursSpent: 30,
        startDate: '',
        endDate: '',
        notes: 'Hard af but fun',
        links: {
          pattern: 'https://www.ravelry.com/patterns/library/step-by-step-sweater',
          tutorial: 'https://www.youtube.com/watch?v=wtofisZp7EA&t=3074s&pp=ygUcZmxvcmVuY2UgbWlsbGVyIHN0ZXAgYnkgc3RlcA%3D%3D',
          pinspo: ''
        },
        tags: ['spring']
      }
    ]
  },
  {
    id: 'coding',
    name: 'Coding',
    bgColor: '#3f0013',
    icon: '💻',
    projects: [
      {
        id: 'c1',
        name: 'Everwood Quests',
        status: 'In Progress',
        hoursSpent: 4,
        startDate: '2025-02-28T20:00:30Z',
        endDate: '',
        notes: '',
        links: {
          githubRepo: 'https://github.com/maishamir/eveQuests'
        },
        tags: ['productivity', 'whimsical']
      },
      {
        id: 'c2',
        name: 'Hobby Tracker',
        status: 'In Progress',
        startDate: '2025-04-12T14:36:00Z',
        endDate: '',
        notes: '',
        links: {
          githubRepo: 'https://github.com/maishamir/hobby-tracker'
        },
        tags: ['productivity', 'dashboard']
      }
    ]
  }
]

export default hobbies;