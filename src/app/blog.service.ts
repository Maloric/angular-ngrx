import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { POSTS } from './data/posts';
import { AppState } from './data/reducer.js';
import { ProvidePosts, DeletePost } from './data/actions';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private store: Store<AppState>) {}

  posts$: Observable<any[]> = this.store
    .select(s => s.blog)
    .pipe(map(b => b.posts));

  postCount$: Observable<number> = this.posts$.pipe(map(b => b.length));

  getPosts() {
    // Normally we would use the HttpClient to fetch some data and then dispatch it
    this.store.dispatch(ProvidePosts({ posts: POSTS }));
  }

  deletePost(id: number) {
    this.store.dispatch(DeletePost({ id }));
  }
}
