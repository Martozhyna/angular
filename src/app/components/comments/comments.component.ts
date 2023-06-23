import {Component, Input} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input()
  postId:number

  comments: IComment[];

  constructor(private commentsService: CommentService) {
  }

  ngOnInit(): void {
    this.commentsService.getCommentById(this.postId).subscribe(value => this.comments = value);
  }

}
