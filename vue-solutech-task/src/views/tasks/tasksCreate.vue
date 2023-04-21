<script setup>
import { reactive } from "vue";
import useTasks from '../../composables/tasks'

const {storeTask,errors} = useTasks();

const form = reactive({
    name:"",
    description:"",
})
</script>
<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeTask(form)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Name</label
                    >
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div v-if="errors.name">
                        <span class="text-sm text-red-500">{{ errors.name[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Description</label
                    >
                    <input
                        type="text"
                        id="description"
                        v-model="form.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div v-if="errors.description">
                        <span class="text-sm text-red-500">{{ errors.description[0] }}</span>
                    </div>
                </div>
                <div class="mt-4">
                    <button
                    type="submit"
                        class="px-4 py-2 bg-green-400 hover:bg-purple-400 text-white rounded"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
