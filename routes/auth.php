<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::post('login', [LoginController::class, 'store'])->name('login.store');
Route::post('logout', [LoginController::class, 'destroy'])->name('logout.destroy');

Route::middleware(['auth:account'])->group(function () {
  Route::get('account/{account}/company', function (Request $request) {
    $company = $request->user('account')->belongs_to;
    $company->load([
      'accounts.role',
      'posts',
    ]);
    return Inertia::render('account/company', ['company' => $company,]);
  })->name('company');
});
