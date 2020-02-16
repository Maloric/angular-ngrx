import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-count',
  template: `
    <p>There are {{ postCount$ | async }} posts.</p>
  `,
  styles: []
})
export class PostCountComponent {
  postCount$ = this.service.postCount$;
  constructor(private service: BlogService) {}
}
