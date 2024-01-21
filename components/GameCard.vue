<template>
  <NuxtLink :to="`/games/${game?.id}`" class="h-full w-64 border flex flex-col text-center justify-end bg-neutral-300">
    <div class="h-full bg-transparent hover:bg-gray-200 flex justify-center">
      <div class="flex">
        <img 
          :src="imgPath" 
          alt="Game Artwork" 
          class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block"
        />
      </div>
    </div>
    <div class="text-lg bg-white py-4">
      <p>{{ game?.name }}</p>
    </div>

    <!-- TODO: Show on hover? -->
    <!-- <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ game?.deck }}
    </p> -->
  </NuxtLink>
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

const imgPath = computed(() => props.game?.image.original_url != null ? `${config.public.imgBaseUrl}${props.game?.image.original_url}` : '/254x356-gamepad.png');
</script>

<style scoped>
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