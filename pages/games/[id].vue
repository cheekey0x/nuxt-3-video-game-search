<template>
  <div class="flex flex-col px-14 md:px-20 mt-10">
    <div class="grid md:grid-cols-7 md:gap-1">
      <img :src="imgUrl" alt="" class="col-span-3 md:col-span-2 mb-4">

      <div class="flex flex-col col-span-3 md:ml-4">
        <h2 class="text-4xl font-sans font-bold mb-5">
          {{ data?.results.name }}
        </h2>

        <div class="flex mb-2">
          <h3 class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2">
            {{ data?.results.genres[0].name }}
          </h3>
        </div>

        <h3 class="text-lg mb-4"><span class="font-semibold">Released:</span> {{ data?.results.original_release_date }}</h3>
        
        <!-- <p class="text-gray-600 text-m">{{ data?.results.summary }}</p> -->

        <hr class="mb-4">

        <div class="mb-4">
          <h3 class="text-2xl font-semibold inline-flex border-b pb-4">Game Concepts</h3>
        </div>

        <ul class="mb-4">
          <li v-for="concept in data?.results.concepts" :key="concept.id">
            <p class="text-lg mb-6">{{ concept.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameResults } from '~/types/GameResults';

const route = useRoute();
const config = useRuntimeConfig();
const gameId = computed(() => route.params.id);

const gameUrl = `${config.public.fetchBaseUrl}api/games/${gameId.value}`;

const { data } = await useFetch<GameResults>(gameUrl);

const imgUrl = computed(() => data.value?.results.image.original_url ? data.value?.results.image.original_url : '/254x356-gamepad.png');
</script>