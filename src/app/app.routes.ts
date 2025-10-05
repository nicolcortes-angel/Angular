import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'Inicio'},
    {path:'admin', component: AdminComponent, title: 'Dashboard'},
    {path:'login', component: LoginComponent, title: 'Inicio Sesion'},
    {path:'products', component: ProductsComponent, title: 'Productos'},
    {path:'registro', component: RegisterComponent, title: 'Registro'},
    {path:'**', component: NotFoundComponent, title: '404'}, //siempre debe ir al final 
];

