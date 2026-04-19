import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthUser {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly MOCK_USERS_KEY = 'pt_mock_users';
  private readonly CURRENT_USER_KEY = 'pt_current_user';

  currentUser = signal<AuthUser | null>(this.loadCurrentUser());

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const users = this.getStoredUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      const authUser: AuthUser = { username: user.username };
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(authUser));
      this.currentUser.set(authUser);
      return true;
    }
    return false;
  }

  signUp(username: string, password: string): boolean {
    const users = this.getStoredUsers();
    if (users.find((u) => u.username === username)) {
      return false; // Username already exists
    }
    users.push({ username, password });
    localStorage.setItem(this.MOCK_USERS_KEY, JSON.stringify(users));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  private getStoredUsers(): { username: string; password: string }[] {
    const stored = localStorage.getItem(this.MOCK_USERS_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private loadCurrentUser(): AuthUser | null {
    const stored = localStorage.getItem(this.CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  }
}
