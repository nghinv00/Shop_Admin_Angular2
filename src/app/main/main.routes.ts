import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
        ]
    }
]