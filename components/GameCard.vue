<template>
  <div class="h-full w-64 border flex flex-col text-white text-center justify-end bg-neutral-600">
    <div class="h-full mb-5 bg-transparent hover:bg-gray-200 flex justify-center">
      <div class="flex">
        <img 
          :src="imgPath" 
          alt="Game Artwork" 
          class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block"
        />
      </div>
    </div>
    <div class="text-lg pb-3">
      <p>{{ game?.name }}</p>
    </div>
    <!-- <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ game?.summary }}
    </p> -->
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Game } from '../types/Game';

import { computed } from 'vue';

const props = defineProps({
  game: {
    type: Object as PropType<Game>
  }
});

const config = useRuntimeConfig();

const imgPath = computed(() => props.game?.image.original_url != null ? `${config.public.imgBaseUrl}${props.game.image.original_url}` : 'https://via.placeholder.com/300x500');
</script>

<style>
img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>