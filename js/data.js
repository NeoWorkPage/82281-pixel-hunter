import image from './image'

export const initialState = Object.freeze({
  lives: 3,
  time: 12,
  stats: 'state'
});

export const levels = Object.freeze({
  'level1': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    image: {
      'image1': `${image.paintings[1]}`,
      'image2': `${image.photos[0]}`
    }
  },
  'level2':{
    description: 'Угадай, фото или рисунок?',
    image: {
      'image1': `${image.paintings[2]}`
    }
  },
  'level3':{
    description: `Найдите рисунок среди изображений`,
    image: {
      'image1':`${image.photos[2]}`,
      'image2':`${image.photos[1]}`,
      'image3':`${image.paintings[0]}`
    }
  }
});

