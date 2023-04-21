<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Http\Resources\v1\TaskCollection;
use App\Http\Resources\v1\TaskResource;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTaskRequest;

class TaskController extends Controller
{
    public function index()
    {
         return new SkillColection(Task::all());
    }

    public function show(Task $task)
    {
    return new TaskResource($task);
    }

    public function store(StoreTaskRequest $request)
    {
        Task::create($request ->validated());
        return response()->json("Task created");
    }

    public function update(StoreTaskRequest $request, Task $task)
    {
        $task -> update($request->validated());
        return response()->json("Task updated");
    }

    public function destroy(Task $task)
    {
        $task -> delete();
        return responce()->json("Task deleted");
    }
}
