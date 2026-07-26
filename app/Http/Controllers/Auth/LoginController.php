<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Routing\Pipeline;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\CanonicalizeUsername;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LoginViewResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Contracts\RedirectsIfTwoFactorAuthenticatable;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    protected $guard;

    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }

    public function create(Request $request): LoginViewResponse
    {
        return app(LoginViewResponse::class);
    }

    public function store(LoginRequest $request) {
      $user = null;
      $guard = null;
      $credentials = $request->only('email', 'password');
      if (Auth::guard('account')->validate($credentials)) {
        $guard = 'account';
        $user = Auth::guard($guard)->getProvider()->retrieveByCredentials($credentials);
      }
      if (Auth::guard('web')->validate($credentials)) {
        $guard = 'web';
        $user = Auth::guard($guard)->getProvider()->retrieveByCredentials($credentials);
      }
      if (!$user || !$guard) {
        return redirect()->back()->with('error', 'Credenciales incorrectas.');
      }
      Auth::guard($guard)->login($user);
      $request->session()->regenerate();

      return redirect()->route('dashboard');
    }

    public function destroy(Request $request): LogoutResponse
    {
        if (Auth::guard('account')->check()) {
            Auth::guard('account')->logout();
        }
        if (Auth::guard('web')->check()) {
            Auth::guard('web')->logout();
        }
        if ($request->hasSession()) {
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }
        return app(LogoutResponse::class);
    }
}
