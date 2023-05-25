import {Component, Input} from '@angular/core';
import {IComment, IPost} from "../../interfaces";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input()
  postId:number

  comments: IComment[];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getCommentsByPostId(this.postId).subscribe(value => this.comments = value);
  }



}
