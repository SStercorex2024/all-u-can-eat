<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  loop: true,
  speed: 600,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    421: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
}

const sliderImages = ['flow', 'InTrend', 'JUNE', 'MAX', 'NINO', 'ZINE']
</script>

<template>
  <section class="about" aria-labelledby="about-title">
    <div class="container">
      <h1 class="about__title" id="about-title">About All You Can Eat</h1>
      <div class="about__content-wrapper">
        <img src="/src/assets/images/one-recipe/10.jpg" alt="" loading="lazy" />
        <div class="about__text">
          <h2 class="about__subtitle">A recipe blog by Sharon Daniels.</h2>
          <p>
            We believe that healthy eating should never compromise on flavor or the joy of cooking.
            Our recipes are crafted with care, focusing on wholesome ingredients, vibrant flavors,
            and innovative cooking techniques. We invite you to explore a world where nutritious
            choices and culinary delight seamlessly merge. Let's rediscover the joy in every kitchen
            adventure, making every meal not just nourishing but also a source of pure joy and
            inspiration. Join us on this flavorful and wholesome exploration as we bring the joy
            back to cooking, one delicious recipe at a time.
          </p>
        </div>
      </div>
    </div>
    <div class="about__partners">
      <div class="container">
        <Swiper class="about__slider" v-bind="swiperOptions">
          <SwiperSlide class="about__slide" v-for="slide in sliderImages" :key="slide">
            <img :src="`/src/assets/images/one-recipe/${slide}.svg`" :alt="slide" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__content-wrapper {
  display: flex;
  column-gap: 20px;
  margin-bottom: 50px;

  img {
    border-radius: var(--border-radius-m);
  }
}

.about__title {
  padding-block: 40px 30px;
  text-align: center;
  color: var(--color-blue);
  font-weight: 700;
  font-size: 80px;
}

.about__text {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  row-gap: 16px;
}

.about__subtitle {
  font-size: 56px;
  color: var(--color-blue);
  font-weight: 700;
}

.about__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.about__partners {
  margin-bottom: 40px;
}

@media (max-width: 990px) {
  .about__content-wrapper {
    flex-direction: column;
    align-items: center;

    img {
      width: 660px;
      max-width: 100%;
    }
  }
}
@media (max-width: 660px) {
  .about__title {
    font-size: 42px;
  }
  .about__subtitle {
    font-size: 36px;
  }
}
</style>
