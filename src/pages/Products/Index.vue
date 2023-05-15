<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Table from '@/components/Table.vue'

const route = useRoute()

const tableFields = [
  { name: 'Id', header: 'ID', alignment: 'right' },
  { name: 'Name', header: 'Name', alignment: 'right' },
  { name: 'Price', header: 'Price', alignment: 'right' },
  { name: 'Quantity', header: 'Quantity', alignment: 'right' },
  { name: 'actions', header: 'Actions', alignment: 'right' }
]

const products = ref([])

const fetchProducts = () => {
  axios.get(`api/products`)
    .then(response => products.value = response.data)
    .catch(error => console.log(error.response))
}

const handleDelete = product => {
  const confirmed = confirm(`Are you sure you want to delete ${product.Name}?`)

  if(confirmed) {
    axios.post(`/api/products/delete/${product.Id}`)
      .then(() => fetchProducts())
      .catch(error => console.log(error.response))
  }
}

onMounted(() => fetchProducts())

onUpdated(() => fetchProducts())
</script>

<template>
  <div class="mt-12">
    <template v-if="route.path === '/products'">
      <div class="flex justify-end items-center">
      <RouterLink to="/products/create" class="inline-flex items-center px-4 py-2 mr-12 bg-cyan-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4">
        Add Product
      </RouterLink>
    </div>
    <Table :fields="tableFields" :data="products">
      <template v-slot:actions="slotProps">
        <div class="px-6 py-4 flex items-center justify-end">
          <RouterLink :to="`/products/${slotProps.data.Id}/edit`" class="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Edit</RouterLink>

          <button @click="handleDelete(slotProps.data)" class="ml-1 text-xs bg-red-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Delete</button>
        </div>
      </template>
    </Table>
    </template>
    <RouterView v-else />
  </div>
</template>
