<template>
  <div class="background-img">
    <div class="flex flex-col">
      <div class="bg-red-500 pt-6 border-b border-neutral-400">
        <div class="mb-7 text-center">
          <h1 class="text-3xl font-bold text-white">Video Games</h1>
        </div>
        <div class="flex justify-center mb-10">
          <div class="border rounded-md border-neutral-400 border-b-0 mr-2">
            <input 
              class="px-2 py-1 border-0 min-w-64"
              v-model="searchTerm"
              type="text"
              placeholder="Game Title..."
              @click="showResults = !showResults && hideSuggestions ? hideSuggestions = !hideSuggestions : hideSuggestions = !hideSuggestions"
            />
            <div v-if="data?.results[0] && !hideSuggestions" class="px-2 pb-2 absolute z-20 bg-white border min-w-64">
              <ul v-for="game in data?.results">
                <!-- <li class="py-1">{{ game.name }}</li> -->
              </ul>
            </div>
          </div>
          <button 
            @click="!showResults ? showResults = !showResults : showResults = showResults; hideSuggestions = true" 
            class="h-9 px-3 bg-neutral-400 active:bg-neutral-500 text-white border border-neutral-700 hover:border-black active:border-black font-semibold rounded-lg"
          >
            Search <span class="text-sm">🔎</span>
          </button>
        </div>
      </div>

      <div class="z-0 self-center pt-10 min-content-height">
        <div 
          v-if="showResults && data?.results[0]" 
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-10 mb-10"
        >
          <div v-for="game in data?.results">
            <GameCard :game="game"></GameCard>
          </div>

          <!-- TODO: Requires custom results pagination -->
          <!-- <div v-if="data?.results.length" class="flex justify-center"> -->
            <!-- <button v-if="!disablePrevious" @click="page--" class="px-4 py-2 text-m border rounded-lg">
              Prev
            </button>
            <div class="px-4 py-2 text-m border rounded-lg">

            </div>
          <button v-if="!disableNext" @click="page++" class="px-4 py-2 text-m border rounded-lg">
              Next
            </button> -->
          <!-- </div> -->
        </div>
        <div v-else class="mb-10 text-center">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-10 mb-10">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
            <img src="/254x356-gamepad.png" alt="" class="border border-neutral-100">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Response } from '~/types/Response';

const searchTerm = ref('');

// TODO: Requires custom results pagination
// const page = ref(1);

// const disabledPrevious = computed(() => {
//   return page.value === 1;
// });

// const disableNext = computed(() => {
//   return page.value + 1 === data.value?.total_pages;
// });

const debouncedSearchTerm = refDebounced(searchTerm, 300);

const url = computed(() => {
  return `api/games/search?query=${debouncedSearchTerm.value}`;
});

const { data } = await useFetch<Response>(url);

const showResults = ref(false);
const hideSuggestions = ref(true);
</script>

<style>
.background-img {
  background: linear-gradient(rgba(125, 125, 125, 0.35),rgba(125, 125, 125, 0.35)), url('/video-game-system.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 50%;
}

.min-content-height {
  min-height: 832px;
}
</style>