import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ServicesComponent } from './services/services.component';
export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },  
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'doctor', component: DoctorComponent },
    {path:'services', component: ServicesComponent}
];
