import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';

 const routes: Routes = [

  {path: 'album', component: AlbumComponent},
  {path: 'photo', component: PhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [AlbumComponent, PhotoComponent]
