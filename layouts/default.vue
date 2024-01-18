<template>
  <nav class="flex justify-center bg-white border-b-2 border-black text-white py-12">
    <NuxtLink to="/" class="px-4 py-2 bg-gray-400 border rounded-lg">
      Home Page
    </NuxtLink>
  </nav>
  <main>
    <slot/>
  </main>

  <div class="bg-white text-center py-7">
    <h2 class="mb-5">
      Built with Nuxt 3 by <a href="https://www.brandonwinger-air.com" target="_blank" class="font-semibold">Brandon Winger-Air</a> using <a href="https://www.giantbomb.com/api/" target="_blank" class="font-semibold">external API</a>.
    </h2>

    <hr width="325" class="mx-auto mb-4">

    <h3>
      <a href="https://github.com/BrandonWingerAir/nuxt-3-video-game-search" target="_blank">GitHub 💻</a>
    </h3>
  </div>
</template>