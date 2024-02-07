<template>
  <nav class="h-20 flex bg-white border-b-2 border-black pl-4 md:pl-6 pr-2 md:pr-4 py-4 text-white">
    <div class="flex w-1/3 justify-start">
      <img src="/gaming-pc-logo.png" alt="gaming logo" class="w-14 h-14 self-center">
    </div>

    <div class="flex w-1/3 justify-center">
      <NuxtLink to="/resources" class="h-11 px-4 pt-2 bg-emerald-500 hover:bg-emerald-600 border border-neutral-800 rounded-lg self-center">
        Learn<span class="hidden md:inline-block">ing Resources</span>
      </NuxtLink>
    </div>
    <div class="flex w-1/3 justify-end">
      <NuxtLink to="/" class="h-11 px-4 pt-2 bg-slate-500 border border-neutral-800 rounded-lg self-center">
        Home Page
      </NuxtLink>
    </div>
  </nav>
  <main>
    <slot/>
  </main>

  <div class="bg-white text-center py-7 px-2 border-t-4 border-t-red-600 border-b-2 md:border-b-4 border-b-neutral-900">
    <h2 class="mb-5">
      A study project in progress built with Nuxt 3 by <a href="https://www.brandonwinger-air.com" target="_blank" class="font-semibold">Brandon Winger-Air</a> using an <a href="https://www.giantbomb.com/api/" target="_blank" class="font-semibold">external API</a>.
    </h2>

    <hr width="325" class="mx-auto mb-5">

    <button class="h-12 bg-emerald-400 hover:bg-emerald-500 px-4 border border-neutral-800 rounded-md text-white hover:text-neutral-100 font-semibold self-center">
      <a href="https://github.com/BrandonWingerAir/nuxt-3-video-game-search" target="_blank">GitHub 💻</a>
    </button>
  </div>
</template>