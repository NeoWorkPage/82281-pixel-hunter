export const initialState = Object.freeze({
  level: 'level-1',
  lives: 3,
  time: 12
});

export const levels = Object.freeze({
  'level-1': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    answer: null
  },
  'level-2':{
    description: 'Угадай, фото или рисунок?',
    answer: null
  },
  'level-3':{
    description: `Найдите рисунок среди изображений`,
    answer: null
  }
});
