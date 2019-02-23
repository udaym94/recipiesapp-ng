import { RouterModule, Routes } from '@angular/router'; /*Routes*/
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
