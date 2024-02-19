import { Route } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

export const appRoutes: Route[] = [{
    path: '',
    component: MainContainerComponent,
    pathMatch: 'full',
}];
