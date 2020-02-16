import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-posts',
  template: `
    <ul>
      <li *ngFor="let post of posts$ | async">
        {{ post.id }}: {{ post.title }}
        <button (click)="deletePost(post.id)">X</button>
      </li>
    </ul>
  `,
  styles: []
})
export class PostsComponent {
  posts$ = this.service.posts$;
  constructor(private service: BlogService) {}

  deletePost(id: number) {
    this.service.deletePost(id);
  }
}
