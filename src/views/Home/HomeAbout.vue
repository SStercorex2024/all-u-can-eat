<script setup lang="ts">
const listLinks = ['Breakfast', 'Dessert', 'Dinner', 'Lunch', 'Snack', 'Vegan']
</script>

<template>
  <section aria-labelledby="about-banner-title" class="about-banner">
    <div class="about-banner__head">
      <div class="container about-banner__head-container">
        <img
          class="about-banner__head-image"
          src="@/assets/images/about/1.jpg"
          alt="Sharon Daniels"
          loading="lazy"
        />
        <div class="about-banner__head-content">
          <h2 class="about-banner__head-title">Meet the cook</h2>
          <p class="about-banner__head-name">Sharon Daniels</p>
          <p class="about-banner__head-desc">
            Sharon is a passionate home chef with a focus on simplicity. She crafts easy-to-follow
            recipes that transform everyday ingredients into delicious creations.
          </p>
          <a class="about-banner__link" href="/about">About Me</a>
        </div>
      </div>
    </div>
    <div class="about-banner__middle">
      <div class="container about-banner__middle-container">
        <h1 class="about-banner__middle-tile" id="about-banner-title">
          What are you in the mood for today?
        </h1>
      </div>
    </div>
    <div class="about-banner__footer">
      <div class="container about-banner__footer-container">
        <ul class="about-banner__footer-list">
          <li class="about-banner__footer-item" v-for="link in listLinks" :key="link">
            <a :href="`/category/${link.toLowerCase()}`" class="about-banner__footer-link"
              >{{ link }}
            </a>
          </li>
        </ul>
        <img
          src="@/assets/images/about/3.jpg"
          alt=""
          loading="lazy"
          class="about-banner__footer-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-block: 80px;
  background-color: var(--color-white);
}

.about-banner__head,
.about-banner__middle,
.about-banner__footer {
  width: 100%;
}

.about-banner__head-container {
  display: flex;
  column-gap: 40px;
  justify-content: space-between;
}

.about-banner__head {
  background-color: var(--color-blue);
}

.about-banner__head-image {
  position: relative;
  max-width: 683px;
  margin-block: -80px;
  border-radius: var(--border-radius-m);
}

.about-banner__head-content {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  color: var(--color-white);
  max-width: 373px;
  padding-block: 80px;
}

.about-banner__head-title {
  font-size: 40px;
  font-weight: 700;
}

.about-banner__head-name {
  font-size: 24px;
}

.about-banner__link {
  display: flex;
  align-self: baseline;
  align-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius-m);
  height: var(--height-button-m);
  padding-inline: 16px;
}

.about-banner__link:hover {
  color: var(--color-yellow);
}

.about-banner__middle {
  background-color: var(--color-gray);
}

.about-banner__middle-container {
  display: flex;
  align-items: flex-start;
  padding-block: 160px 80px;
}

.about-banner__middle-tile {
  width: 560px;
  font-size: 72px;
  font-weight: 700;
  color: var(--color-white);
}
.about-banner__footer-container {
  display: flex;
  column-gap: 40px;
}

.about-banner__footer-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 80px;
}

.about-banner__footer-link {
  font-weight: 700;
  font-size: 40px;
  color: var(--color-gray);
  transition: var(--transition-duration);
}

.about-banner__footer-link:hover {
  color: var(--color-yellow);
}

.about-banner__footer-img {
  border-radius: 400px 400px 0 0;
  max-width: 477px;
  margin-top: -382px;
}

@media (max-width: 1124px) {
  .about-banner__head-container {
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .about-banner__head-image {
    margin-block: -60px 0;
  }
  .about-banner__middle-container {
    padding-block: 50px;
  }
  .about-banner__middle-tile {
    font-size: 42px;
  }
}
@media (max-width: 962px) {
  .about-banner__footer-img {
    max-width: 340px;
    margin-top: -123px;
  }
  .about-banner__footer-list {
    padding-top: 40px;
  }
  .about-banner__footer-link {
    font-size: 32px;
  }
}
@media (max-width: 721px) {
  .about-banner__head-image {
    width: 100%;
  }
  .about-banner__middle-container {
    padding-bottom: 130px;
  }
  .about-banner__footer-img {
    order: -1;
  }
}
@media (max-width: 666px) {
  .about-banner__middle-container {
    text-align: center;
    padding-bottom: 140px;
  }
  .about-banner__middle-tile {
    width: 100%;
  }
  .about-banner__footer-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .about-banner__footer-list {
    justify-content: center;
  }
}

</style>
