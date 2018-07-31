import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [
    {
      title: 'Post 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur ea pariatur porro quia vitae voluptatem voluptatum? Accusantium aliquam a',
      id: 1
    },
    {
      title: 'Post 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur ea pariatur porro quia vitae voluptatem voluptatum? Accusantium aliquam a',
      id: 2
    },
    {
      title: 'Post 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur ea pariatur porro quia vitae voluptatem voluptatum? Accusantium aliquam a',
      id: 3
    }
  ];

  infoIsShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleInfoBlock() {
    this.infoIsShown = !this.infoIsShown;
  }

}
