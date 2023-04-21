import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useTasks() {
    const tasks = ref([]);
    const task = ref([]);
    const errors = ref([]);
    const router = useRouter();

    // show all tasks
    const getTasks = async () => {
        const response = await axios.get("tasks");
        tasks.value = response.data.data;
    };

    // show specific task
    const getTask = async (id) => {
        const response = await axios.get("tasks/" + id);
        task.value = response.data.data;
    };

    // create a task
    const storeTask = async (data) => {
        try {
            await axios.post("tasks", data);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response.status == 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    // edit / update the task
    const updateTask = async (id) => {
        try {
            await axios.put("tasks/" + id, task.value);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response.status == 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    // delete task
    const destroyTask = async(id) => {
        if(!window.confirm("Are you sure?")){
            return;
        }
        await axios.delete("tasks/" + id);
        await getTasks();
    }

    return {
        task,
        tasks,
        getTask,
        getTasks,
        storeTask,
        updateTask,
        destroyTask,
        errors,
    };
}
