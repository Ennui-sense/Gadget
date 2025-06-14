// документация
// https://swiperjs.com/swiper-api

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
		bulletClass: 'hero__slider-button',
		bulletActiveClass: 'active'
  },
	autoplay: {
		delay: 4000
	}
});
