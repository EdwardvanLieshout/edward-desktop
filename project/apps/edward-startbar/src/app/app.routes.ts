import { Route } from '@angular/router';
import { StartbarComponent } from './startbar/startbar.component';

export const appRoutes: Route[] = [{
    path: '',
    component: StartbarComponent,
    pathMatch: 'full',
}];
