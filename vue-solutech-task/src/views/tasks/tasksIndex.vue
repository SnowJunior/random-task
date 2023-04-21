<script setup>
import useTasks from "../../composables/tasks";
import { onMounted } from "vue";
import TaskEdit from "./taskEdit.vue";

const { tasks, getTasks, destroyTask } = useTasks();

onMounted(() => getTasks());
</script>

<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'TaskCreate'}" class="px-4 py-2 bg-green-400 hover:bg-purple-400 text-white rounded">New Task</RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Name</th>
                        <th scope="col" class="px-6 py-3">Description</th>
                        <th scope="col" class="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">{{ task.name }}</td>
                        <td class="px-6 py-4">{{ task.description }}</td>
                        <td class="px-6 py-4 space-x-2">
                            <RouterLink :to="{name: 'TaskEdit', params: {id: task.id}}" class="px-4 py-2 bg-blue-500 hover:bg-green-400 text-white rounded">Edit</RouterLink>

                            <button @click="destroyTask(task.id)"
                    type="submit"
                        class="px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded"
                    >
                        Delete
                    </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
