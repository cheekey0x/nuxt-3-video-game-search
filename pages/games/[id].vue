<template>
  <div class="flex flex-col px-20 mt-10">
    <div class="grid grid-cols-7 gap-1">
      <img :src="imgUrl" alt="" class="col-span-2">

      <div class="flex flex-col col-span-3">
        <h2 class="text-4xl font-sans font-bold mb-5">
          {{ data?.results.name }}
        </h2>

        <div class="flex">
          <h3 class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2">
            {{ data?.results.genres[0] }}
          </h3>
        </div>

        <h3 class="text-lg my-2">{{ data?.results.original_release_date }}</h3>
        <p class="text-gray-600 text-m">{{ data?.results.summary }}</p>
        <p class="text-lg my-2">{{ data?.results.concepts }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameResults } from '~/types/GameResults';

const route = useRoute();
const config = useRuntimeConfig();
const gameId = computed(() => route.params.id);

const gameUrl = `http://localhost:3000/api/games/${gameId.value}`;

const { data } = await useFetch<GameResults>(gameUrl);

// const imgUrl = computed(() => data.value?.image.original_url ? `${config.public.imgBaseUrl}/${data.value?.image.original_url}` : '/254x356-gamepad.png');
const imgUrl = '/254x356-gamepad.png';
</script>