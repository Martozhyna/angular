import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';

import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users/users.component'
import { UserComponent } from './components/users/user/user.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';

const routes:Routes = [
  {
    path: '', component: MainLayoutsComponent, children:[
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {path: "users", component: UserPageComponent, children:[
          {path:':id', component: UserDetailsPageComponent}
        ]},
      {path: "posts", component: PostPageComponent, children:[
          {path: ':id', component: PostDetailsPageComponent}
        ]},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    UserPageComponent,
    PostPageComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailsPageComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostDetailsPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
