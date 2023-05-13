<script setup>
import Pagination from './Pagination.vue'

const props = defineProps({
    fields: Array,
    data: Array,
    meta: Object
})

const classes = field => {
    let classes = ''

    if (field.name.toLowerCase() === 'status') {
        classes = 'hidden px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider md:block'
    } else {
        classes = 'px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

        if (field.alignment) {
            classes += ` text-${field.alignment}`
        }
    }

    return classes
}

const statusStyles = {
    created: 'bg-green-100 text-green-800',
    updated: 'bg-yellow-100 text-yellow-800',
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800'
}
</script>

<template>
    <div class="max-w-full px-4 sm:px-6 lg:px-12">
        <div class="flex flex-col mt-2">
            <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg border border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th v-for="(field, key) in fields" :key="key" :class="classes(field)">
                                {{ field.header }}
                            </th>
                        </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-if="data.length > 0" v-for="item in data" :key="item.id" class="bg-white">
                            <slot v-for="(field, key) in fields" :key="key" :data="item" :name="field.name">
                                <template v-if="field.name.toLowerCase() === 'status'">
                                    <td class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                        <span :class="[statusStyles[item[field.name].toLowerCase()], 'w-full inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize']">
                                            {{ item[field.name] }}
                                        </span>
                                    </td>
                                </template>

                                <td v-else class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                    {{ item[field.name] }}
                                </td>
                            </slot>
                        </tr>

                        <tr v-else>
                            <td :colspan="fields.length" class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">No Records Available</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Pagination -->
                <Pagination :meta="meta" />
            </div>
        </div>
    </div>
</template>