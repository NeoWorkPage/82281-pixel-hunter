import image from './image';

export const initialState = Object.freeze({
  lives: 3,
  time: 30,
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],

});

export const bonusState = [{
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],
  gameNumber: 1,
  bonus: [
    {
      name: `Бонус за скорость`,
      justBonus: 1,
      points: 50,
      total: 50,
      nameClass: `fast`
    },
    {
      name: `Бонус за жизнь`,
      justBonus: 2,
      points: 50,
      total: 100,
      nameClass: `heart`
    },
    {
      name: `Штраф за медлительность`,
      justBonus: 2,
      points: 50,
      total: -100,
      nameClass: `slow`
    }
  ],
  totalPointsStats: 900,
  dublePoints: 100,
  amountPoints: 900
}, {
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `wrong`, `fast`, `unknown`],
  gameNumber: 2,
  bonus: [
    {
      name: `Бонус за скорость`,
      justBonus: 1,
      points: 50,
      total: 50,
      nameClass: `fast`
    },
    {
      name: `Бонус за жизнь`,
      justBonus: 2,
      points: 50,
      total: 100,
      nameClass: `heart`
    },
    {
      name: `Штраф за медлительность`,
      justBonus: 2,
      points: 50,
      total: -100,
      nameClass: `slow`
    }
  ],
  totalPointsStats: 900,
  dublePoints: 100,
  amountPoints: 900
}, {
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],
  gameNumber: 3,
  bonus: [
    {
      name: `Бонус за скорость`,
      justBonus: 1,
      points: 50,
      total: 50,
      nameClass: `fast`
    },
    {
      name: `Бонус за жизнь`,
      justBonus: 2,
      points: 50,
      total: 100,
      nameClass: `heart`
    },
    {
      name: `Штраф за медлительность`,
      justBonus: 2,
      points: 50,
      total: -100,
      nameClass: `slow`
    }
  ],
  totalPointsStats: 900,
  dublePoints: 100,
  amountPoints: 900
}
];


export const levelsAll = Object.freeze([
  {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    question: [image.paintings[1], image.photos[0]],
  },
  {
    description: `Угадай, фото или рисунок?`,
    question: [image.paintings[2]],

  },
  {
    description: `Найдите рисунок среди изображений`,
    question: [image.photos[2], image.photos[1], image.paintings[0]],

  }
]);

