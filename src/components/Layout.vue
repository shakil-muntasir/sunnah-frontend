<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const userData = ref({
  Name: '',
  Type: ''
})

onMounted(() => {
  const userEmail = localStorage.getItem('userEmail')
  if(localStorage.getItem('authToken')) {
    axios.get(`api/user?email=${userEmail}`)
    .then(response => {
      userData.value = response.data
    })
    .catch(error => {
      console.log(error.response);
    })
  }
})

const submitLogout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userName')
  router.push('/login')
}
</script>

<template>
  <main class="flex">
    <aside class="w-2/12 bg-white h-screen">
      <RouterLink to="/">
        <img src="../assets/logo.png" alt="Logo" class="mx-auto h-32 w-32 mt-8" />
      </RouterLink>

      <!-- Navigation routes -->
      <nav class="mt-14 flex flex-col gap-y-6">
        <RouterLink to="/" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/dashboard.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Dashboard</span>
        </RouterLink>

        <RouterLink to="/products" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/products.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Products</span>
        </RouterLink>

        <RouterLink to="/orders" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/orders.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Orders</span>
        </RouterLink>

        <RouterLink to="/marketing" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/products.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Marketing</span>
        </RouterLink>

        <RouterLink to="/settings" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/settings.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Settings</span>
        </RouterLink>

        <button @click="submitLogout" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
          <img src="../assets/icons/logout.png" class="h-6 w-6" />
          <span class="ml-7 text-gray-900 text-lg">Logout</span>
        </button>
      </nav>
    </aside>

    <main class="bg-gray-50 flex-1 p-3">
      <header class="ml-12 flex justify-between items-center">
        <h1 class="font-semibold text-3xl tracking-wide uppercase text-gray-900">{{ route.meta.title }}</h1>

        <div class="flex flex-col items-center justify-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=144&h=144&q=80" alt="User" class="h-28 w-28 rounded-full">
          
          <p class="mt-2 font-semibold tracking-wide">{{ userData.Name }}</p>
          <span class="text-sm font-light">{{ userData.Type }}</span>
        </div>
      </header>
      
      <!-- Routes will show up here -->
      <RouterView />
    </main>
  </main>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-slate-100
}
</style>