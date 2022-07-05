import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  {
    path: 'child1',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4600/remoteEntry.js',
      remoteName: 'mfe_child1',
      exposedModule: 'Child1Module',
    }).then(m => m.Child1Module)
  },
  {
    path: 'child2',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4700/remoteEntry.js',
      remoteName: 'mfe_child2',
      exposedModule: 'Child2Module',
    }).then(m => m.Child2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
