<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    // users
    public function index()
    {
        return view('users/index');
    }
}
