<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::post('login', [LoginController::class, 'store'])->name('login.store');
Route::post('logout', [LoginController::class, 'destroy'])->name('logout.destroy');

Route::middleware(['auth:account'])->group(function () {
  Route::inertia('dashboard', 'dashboard')->name('dashboard');
  Route::get('account/{account}/dashboard', function (Request $request) {
    $account = $request->user('account');
    $company = $account->belongs_to;
    $account->load([
      'role', 'posts',
    ]);
    return Inertia::render('account/dashboard', ['account' => $account, 'company' => $company,]);
  })->name('account.dashboard');

  Route::get('account/{account}/company', function (Request $request) {
    $company = $request->user('account')->belongs_to;
    $company->load([
      'accounts.role',
      'posts',
    ]);
    return Inertia::render('account/company', ['company' => $company,]);
  })->name('company');

  Route::get('account/{account}/company/post/create', function (Request $request) {
    $account = $request->user('account');
    $company = $request->user('account')->belongs_to;
    return Inertia::render('account/post/create', ['company' => $company, 'account' => $account,]);
  })->name('post.create');

  Route::post('account/{account}/post/create', function (Request $request) {
    $account = $request->user('account');
    $company = $request->user('account')->belongs_to;
    $validated = $request->validate([
      'title' => 'required|string',
      'description' => 'nullable|string',
      'content' => 'required|string',
    ]);
    $company->posts()->create(array_merge($validated, [
      'published_by' => $account->id,
    ]));
    return redirect()->route('company', $account->id)->with('success', 'Éxito c:');
  })->name('post.store');
});
