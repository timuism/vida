<template>
  <main class="flex items-center w-screen h-screen text-white bg-black font-dmsans">
    <div class="w-full mx-12 space-y-36 md:mx-56 md:w-1/2">
      <h1 class="text-8xl">Vida</h1>

      <section class="text-6xl">
        <p>Organize your life.</p>
        <p>In one place.</p>
      </section>

      <section class="pt-20 border-t-2 border-white">
        <div class="flex items-center space-x-4">
          <router-link to="/signup">
            <x-button-primary class="px-4 py-2">
              Sign Up
            </x-button-primary>
          </router-link>

          <p>or</p>

          <x-button-secondary>
            Log In
          </x-button-secondary>
        </div>
      </section>
    </div>
  </main>
</template>