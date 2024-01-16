<template>
  <nav class="flex justify-center mt-10">
    <NuxtLink to="/" class="px-4 py-2 border rounded-lg">
      Home Page
    </NuxtLink>
  </nav>
  <main>
    <slot/>
  </main>
  
  <hr class="mb-7">

  <div class="text-center">
    <h2 class="mb-5">
      Built with Nuxt 3 by <a href="https://www.brandonwinger-air.com" target="_blank" class="font-semibold">Brandon Winger-Air</a> using <a href="https://www.giantbomb.com/api/" target="_blank" class="font-semibold">external API</a>.
    </h2>

    <hr width="325" class="mx-auto mb-4">

    <h3 class="mb-7">
      <a href="https://github.com/BrandonWingerAir/nuxt-3-video-game-search" target="_blank">GitHub 💻</a>
    </h3>
  </div>
</template>