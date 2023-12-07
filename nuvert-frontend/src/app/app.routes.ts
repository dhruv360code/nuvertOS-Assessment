import { Routes } from '@angular/router';
import {CompoundDetailComponent} from './compound-detail/compound-detail.component';
import {CompoundListComponent} from './compound-list/compound-list.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: '', component: CompoundListComponent },
  { path: 'detail/:id', component: CompoundDetailComponent },
  { path: 'edit/:id', component: EditComponent },

];


