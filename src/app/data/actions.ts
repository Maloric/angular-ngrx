import { createAction, props } from '@ngrx/store';

export const DeletePost = createAction('Delete Post', props<{ id: number }>());

export const ProvidePosts = createAction(
  'Provide Posts',
  props<{ posts: any[] }>()
);
