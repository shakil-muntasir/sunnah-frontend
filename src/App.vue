<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Layout from '@/components/Layout.vue'

const route = useRoute()

const isAuthRoute = computed(() => {
  return route.path === '/login' || route.path === '/register'
})
</script>

<template>
  <Layout v-if="!isAuthRoute" />
  <RouterView v-else />
</template>
