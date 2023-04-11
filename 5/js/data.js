import { getRandomInteger, getRandomArrayElement, generateUniqValue } from './util.js';

const PHOTO_COUNT = 25;
const COMMENT_COUNT = 5;
const MIN_COMMENTS_ID_COUNT = 1;
const MAX_COMMENTS_ID_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_URL_COUNT = 1;
const MAX_URL_COUNT = 25;
const MIN_PHOTO_ID_COUNT = 1;
const MAX_PHOTO_ID_COUNT = 25;

// Массивы с описаниями, комментариями фотографий и именами пользователей
const DESCRIPTIONS = [
  'Нужно больше котиков',
  'Милота как она есть',
  'Очень популярное фото',
  'Шедевр!',
];

const NAMES = [
  'Никита',
  'Илья',
  'Светлана',
  'Анна',
  'Виктор',
  'Сергей',
  'Антон',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Объект - комментарий
const createComment = () => ({
  id: generateUniqValue([], MIN_COMMENTS_ID_COUNT, MAX_COMMENTS_ID_COUNT),
  avatar: `img/avatar-${generateUniqValue([], 1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

// Объект - описание фотографии
const createPhotoDescription = () => ({
  id: generateUniqValue([], MIN_PHOTO_ID_COUNT, MAX_PHOTO_ID_COUNT),
  url: `photos/${generateUniqValue([], MIN_URL_COUNT, MAX_URL_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger([], MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: COMMENT_COUNT }, createComment),
});

// Массив объектов - описаний фотографии
const getSimilarPhotoDescription = () => Array.from({ length: PHOTO_COUNT }, createPhotoDescription);
getSimilarPhotoDescription();
