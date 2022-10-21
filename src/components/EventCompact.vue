<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  event: {
    eventName: string
    eventStartTime: string
    eventEndTime: string
    slug: string
  }
}>()

const {eventName, eventStartTime, eventEndTime, slug} = props.event
</script>

<template>
  <router-link :to="`/event/${slug}`">
    <div class="w-[200px] pb-2 border-b-2 border-green">
        <div class="text-lg">{{eventName}}</div>
        <p class="text-sm">{{eventStartTime}} — {{eventEndTime}}</p>
    </div>
  </router-link>
</template>