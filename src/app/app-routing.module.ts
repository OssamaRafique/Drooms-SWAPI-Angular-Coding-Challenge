import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character/character-detail/character-detail.component';
import { MovieDetailComponent } from './pages/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
