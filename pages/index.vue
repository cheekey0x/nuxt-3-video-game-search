<template>
  <div>
    <div class="flex flex-col py-10">
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-center">Video Games List</h2>
      </div>
      <div class="flex justify-center mb-8">
        <div class="border rounded-md border-neutral-400">
          <input 
            class="px-2 py-1 border-0 min-w-64"
            v-model="searchTerm"
            type="text"
            placeholder="Game Title..."
          />
          <div v-if="data?.results[0] && !showResults" class="px-2 pb-2">
            <ul v-for="game in data?.results">
              <li class="py-1">{{ game.name }}</li>
            </ul>
          </div>
        </div>
        <button @click="showResults = !showResults" class="h-9 px-4 bg-cyan-500 text-white font-semibold rounded-lg">
          Search
        </button>
      </div>
      <div v-if="showResults" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
        <div v-for="game in data?.results">
          <GameCard :game="game"></GameCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Response } from '~/types/Response';

const searchTerm = ref('');

const debouncedSearchTerm = refDebounced(searchTerm, 300);

const url = computed(() => {
  return `api/games/search?query=${debouncedSearchTerm.value}`;
});

const { data } = await useFetch<Response>(url);

const showResults = ref(false);
</script>