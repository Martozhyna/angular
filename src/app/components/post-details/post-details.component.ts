import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  @Input()
  post:IPost

  postId: number;

  getPost():void {
    this.postId = this.post.id

  }
}
