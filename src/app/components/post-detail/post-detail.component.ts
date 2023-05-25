import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input()
  post: IPost
  postId: number

  getComments():void {
    this.postId = this.post.id

  }
}
