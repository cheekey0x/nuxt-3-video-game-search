<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <div class="mb-5 bg-transparent hover:bg-gray-200 inline-block">
      <img 
        :src="imgPath" 
        alt="Game Artwork" 
        class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block"
      />
    </div>
    <div class="text-lg">
      {{ game?.name }}
    </div>
    <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ game?.summary }}
    </p>
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