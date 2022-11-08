<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/Login.vue'
import Nav from '@/components/Nav.vue'
</script>

<template>
    <div class="flex flex-col font-dmsans md:flex-row text-gray">
      <Suspense>
        <Nav />
      </Suspense>

      <main class="grow">
          <RouterView />
      </main>
    </div>
</template>
