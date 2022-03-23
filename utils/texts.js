import instagram from './../public/icons/instagram.svg';
import telegram from './../public/icons/telegram.svg';
import vk from './../public/icons/vkontakte.svg';
import phone from './../public/icons/phone.svg';

export const texts = [
  {
    lang: 'en',
    nav: [
      {
        id: 'about',
        title: 'About',
        path: '/about',
      },
      {
        id: 'cooperation',
        title: 'Cooperation',
        path: '/cooperation',
      },
      {
        id: 'works',
        title: 'Works',
        path: '/works',
      },
    ],
    pages: [
      {
        id: 'index',
        title: 'XENIA DULISHKEVICH'
      },
      {
        id: 'about',
        title: 'ABOUT ME | XENIA DULISHKEVICH',
        pageTitle: 'ABOUT ME',
        textBlocks: [
          `Hi! My name is Ksenia and I am a professional photographer from Taganrog. I may become you guide to the world of art and aesthetics.`,
          'Take a deep breath. Now you are ready to start.',
          'I will reveal your most beautiful features, fill the photos with the energy you beam. Let me show your grace and power.',
        ],
        cta: [
          {
            id: 'works',
            text: 'My works will best tell you about my experience.',
            buttonText: 'See Works',
            link: '/works',
          }
        ],
      },
      {
        id: 'cooperation',
        title: 'COOPERATION | XENIA DULISHKEVICH',
        pageTitles: ['PRICE', 'CONTACTS'],
        terms: ['1 hour photoset (~40 photos) = 2000 RUB', '2 hours photoset (~80 photos) = 4000 RUB'],
        description: 'Feel free to ask me any questions than will be on your mind. I am available on',
        contactLinks: [
          {
            id: 'phone',
            text: '+7 (928) 339 - 20 - 63',
            link: 'tel:+79283392063',
            iconPath: phone,
          },
          // {
          //   id: 'instagram',
          //   text: 'xeniauxenia',
          //   link: 'https://instagram.com/xeniauxenia',
          //   iconPath: instagram,
          // },
          // {
          //   id: 'telegram',
          //   text: 'xeniauxenia',
          //   link: 'https://telegram.com/xeniauxenia',
          //   iconPath: telegram,
          // },
          // {
          //   id: 'vkontakte',
          //   text: 'Ksenia Dulishkevich',
          //   link: 'https://vk.com/xeniauxenia',
          //   iconPath: vk,
          // },
        ],
      },
      {
        id: 'works',
        title: 'MY WORKS | XENIA DULISHKEVICH',
        pageTitle: 'MY WORKS',
      }
    ],
  },
  {
    lang: 'ru',
    nav: [
      {
        id: 'about',
        title: 'Обо мне',
        path: '/about',
      },
      {
        id: 'cooperation',
        title: 'Сотрудничество',
        path: '/cooperation',
      },
      {
        id: 'works',
        title: 'Мои работы',
        path: '/works',
      },
    ],
    pages: [
      {
        id: 'index',
        title: 'XENIA DULISHKEVICH',
      },
      {
        id: 'about',
        title: 'ОБО МНЕ | XENIA DULISHKEVICH',
        pageTitle: 'ОБО МНЕ',
        textBlocks: [
          `Привет! Меня зовут Ксения и я профессиональный фотограф из города Таганрог. Я могу стать твоим проводником в мир искусства и эстетики.`,
          'Сделай глубокий вдох. Теперь мы готовы начать.',
          'Я раскрою твои самые прекрасные черты, наполню фотографии энергией, которую ты излучаешь. Позволь мне показать твою грацию и силу.',
        ],
        cta: [
          {
            id: 'works',
            text: 'Мои работы лучше всего смогут рассказать тебе о моем опыте.',
            buttonText: 'Посмотреть работы',
            link: '/works',
          }
        ],
      },
      {
        id: 'cooperation',
        title: 'СОТРУДНИЧЕСТВО | XENIA DULISHKEVICH',
        pageTitles: ['УСЛОВИЯ', 'КОНТАКТЫ'],
        terms: ['1 час фотосессии (~40 фотографий) = 2000 RUB', '2 часа фотосессии (~80 фотографий) = 4000 RUB'],
        description: 'Не стесняйся задавать мне любые вопросы, которые у тебя на уме. Ты можешь связаться со мной через',
        contactLinks: [
          {
            id: 'phone',
            text: '+7 (928) 339 - 20 - 63',
            link: 'phone',
            iconPath: phone,
          },
          // {
          //   id: 'instagram',
          //   text: 'xeniauxenia',
          //   link: 'https://instagram.com/xeniauxenia',
          //   iconPath: instagram,
          // },
          // {
          //   id: 'telegram',
          //   text: 'xeniauxenia',
          //   link: 'https://telegram.com/xeniauxenia',
          //   iconPath: telegram,
          // },
          // {
          //   id: 'vkontakte',
          //   text: 'Ксения Дуликшевич',
          //   link: 'https://vk.com/xeniauxenia',
          //   iconPath: vk,
          // },
        ],
      },
      {
        id: 'works',
        title: 'МОИ РАБОТЫ | XENIA DULISHKEVICH',
        pageTitle: 'МОИ РАБОТЫ',
      }
    ],
  }
];
