import { createReducer, on } from '@ngrx/store';
import { ProvidePosts, DeletePost } from './actions';

interface BlogState {
  posts: any[];
}

const initialBlogState: BlogState = {
  posts: []
};

const BlogReducer = createReducer(
  initialBlogState,
  on(ProvidePosts, (state: BlogState, { posts }) => ({
    ...state,
    posts
  })),
  on(DeletePost, (state: BlogState, { id }) => ({
    ...state,
    posts: state.posts.filter(p => p.id !== id)
  }))
);

export interface AppState {
  blog: BlogState;
}

export const AppReducers = {
  blog: BlogReducer
};
