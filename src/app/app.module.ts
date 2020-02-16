import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostCountComponent } from './post-count/post-count.component';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './data/reducer';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [AppComponent, PostsComponent, PostCountComponent],
  imports: [BrowserModule, StoreModule.forRoot(AppReducers)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(blogService: BlogService) {
    blogService.getPosts();
  }
}
