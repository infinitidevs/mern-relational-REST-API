const seed = {
  exercises: [
    {
      _exerciseid: 1,
      _routine: 1,
      name: 'Pull-Up',
      type: 'Pull',
      primary_muscles: ['biceps', 'lats'],
      url: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
    },
    {
      _exerciseid: 2,
      _routine: 1,
      name: 'Pendlay Row',
      type: 'Pull',
      primary_muscles: ['lats', ' rhomboids'],
      url: 'https://www.youtube.com/watch?v=kmFx0tti3ds'
    },
    {
      _exerciseid: 3,
      _routine: 1,
      name: 'DB Pullover',
      type: 'Pull',
      primary_muscles: ['pectoral', 'lats'],
      url: 'https://www.youtube.com/watch?v=FK4rHfWKEac'
    },
    {
      _exerciseid: 4,
      _routine: 1,
      name: 'DB Rear Delt Fly',
      type: 'Pull',
      primary_muscles: ['deltoids'],
      url: 'https://www.youtube.com/watch?v=3gJXpfwg_go'
    },
    {
      _exerciseid: 5,
      _routine: 1,
      name: 'Ring Pelican Curl',
      type: 'Pull',
      primary_muscles: ['biceps'],
      url: 'https://www.youtube.com/watch?v=c5VsOyiARZI&pp=ugMICgJlcxABGAE%3D'
    },
    {
      _exerciseid: 6,
      _routine: 1,
      name: 'DB Spider Curl',
      type: 'Pull',
      primary_muscles: ['biceps'],
      url: 'https://www.youtube.com/watch?v=LCCCImzeQUc'
    },
    {
      _exerciseid: 7,
      _routine: 2,
      name: 'Overhead Press',
      type: 'Push',
      primary_muscles: ['pectoral', 'deltoids', 'triceps'],
      url: 'https://www.youtube.com/watch?v=2yjwXTZQDDI'
    },
    {
      _exerciseid: 8,
      _routine: 2,
      name: 'Dip',
      type: 'Push',
      primary_muscles: ['pectoral', 'triceps'],
      url: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
    },
    {
      _exerciseid: 9,
      _routine: 2,
      name: 'Larsen Bench Press',
      type: 'Push',
      primary_muscles: ['pectoral', 'triceps', 'shoulders'],
      url: 'https://www.youtube.com/watch?v=n2R2UK_e9Aw'
    },
    {
      _exerciseid: 10,
      _routine: 2,
      name: 'DB Chest Fly',
      type: 'Push',
      primary_muscles: ['pectoral', 'triceps', 'shoulders'],
      url: 'https://www.youtube.com/watch?v=xyHdY99F640'
    },
    {
      _exerciseid: 11,
      _routine: 2,
      name: 'BW Tricep Extension',
      type: 'Push',
      primary_muscles: ['triceps'],
      url: 'https://www.youtube.com/watch?v=B3hPk-V4qq4'
    },
    {
      _exerciseid: 12,
      _routine: 2,
      name: 'DB Lateral Raise',
      type: 'Push',
      primary_muscles: ['shoulders'],
      url: 'https://www.youtube.com/watch?v=3VcKaXpzqRo'
    }
  ],
  routines: [
    { _routineid: 1, name: 'Pull #1', _exercises: [1, 2, 3, 4, 5, 6], sets: 3, reps: '8-10' },
    { _routineid: 2, name: 'Push #1', _exercises: [7, 8, 9, 10, 11, 12], sets: 3, reps: '8-10' }
  ]
};

module.exports = seed;
