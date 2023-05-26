import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost, IUser} from "../../../interfaces";
import {PostService, UserService} from "../../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: IPost

  constructor(private activatedRoute : ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!state) {
        this.postService.getById(id).subscribe(value => this.post = value)
      } else {
        this.post = state
      }
    })
  }

}
