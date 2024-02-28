import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { AuthService } from '~app/auth/shared/auth.service';
import { ROUTES_CONFIG, RoutesConfig } from '~app/configs/routes.config';
import { UserService } from '~app/users/shared/user.service';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    AsyncPipe,
    NgClass,
    MatIconModule,
    HamburgerButtonComponent,
    OverlayMenuComponent,
    LayoutModule,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isHamburgerOpen = false;
  classLogoUnderlineFlag = false; // Used to trigger the logo underline animation
  currentUser$ = inject(UserService).currentUser$;
  isLoggedIn$ = inject(AuthService).isAuthenticated$;
  destroy$ = new Subject<void>();

  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: RoutesConfig,
    private authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    // When the route changes, trigger the logo underline animation
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.closeOverlayMenu();
        this.triggerLogoUnderlineAnimation();
      });

    // Close the overlay menu when the screen is resized to desktop size
    this.breakpointObserver
      .observe('(max-width: 768px)')
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (!result.matches) {
          this.closeOverlayMenu();
        }
      });
  }

  logOut(): void {
    this.authService.logout();
  }
  toggleOverlayMenu(): void {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }
  closeOverlayMenu() {
    this.isHamburgerOpen = false;
  }

  triggerLogoUnderlineAnimation(): void {
    this.classLogoUnderlineFlag = false;
    setTimeout(() => {
      this.classLogoUnderlineFlag = true;
    }, 10);
  }
}
