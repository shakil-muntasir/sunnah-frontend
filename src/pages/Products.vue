<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Table from '@/components/Table.vue'

const route = useRoute()

const data = ref({
  data: [
    {
      id: '101',
      name: 'P2321',
      price: 850,
      quantity: 12,
      links: {
        self: '/'
      }
    },
    {
      id: '102',
      name: 'P2322',
      price: 855,
      quantity: 15,
      links: {
        self: '/'
      }
    },
    {
      id: '103',
      name: 'P2323',
      price: 850,
      quantity: 18,
      links: {
        self: '/'
      }
    },
  ],
  links: {
    self: '/'
  }
})

const meta = ref({
  links: [
    {url: '/', label: 'previous'},
    {url: '/', label: '1'},
    {url: '/', label: '2'},
    {url: '/', label: 'next'},
  ],
  from: '1',
  to: '10',
  total: '30'
})

const tableFields = [
  { name: 'id', header: 'ID', alignment: 'right' },
  { name: 'name', header: 'Name', alignment: 'right' },
  { name: 'price', header: 'Price', alignment: 'right' },
  { name: 'quantity', header: 'Quantity', alignment: 'right' },
  { name: 'actions', header: 'Actions', alignment: 'right' }
]
</script>

<template>
  <div class="mt-12">
    <Table :fields="tableFields" :data="data.data" :meta="meta">
      <template v-slot:actions="slotProps">
        <div class="px-6 py-4 flex items-center justify-end">
          <button class="text-sm bg-lime-500 text-white px-2 py-0.5 rounded-lg font-serif uppercase">Go</button>
        </div>
      </template>
    </Table>
  </div>
</template>
