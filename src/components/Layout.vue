<template>
  <div class="flex flex-col items-start justify-between space-y-12">
    <header class="flex flex-col-reverse mt-12 ml-8">
      <slot name="header" />
    </header>

    <div class="ml-8">
      <slot name="content" />
    </div>
  </div>
</template>