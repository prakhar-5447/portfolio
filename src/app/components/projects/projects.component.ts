import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Juicy-N-Yummy',
      link: 'https://github.com/pratham-0094/Juicy-N-Yummy',
      src: '/assets/images/projects/juicy-n-yummy.jpg',
    },
    {
      title: 'INO',
      link: 'https://github.com/prakhar-5447/INO',
      src: '/assets/images/projects/ino.jpg',
    },
    {
      title: 'Firstmy',
      link: 'https://github.com/prakhar-5447/firstmy',
      src: '/assets/images/projects/firstmy.jpg',
    },
    {
      title: 'Todo App',
      link: 'https://github.com/prakhar-5447/angular-project',
      src: '/assets/images/projects/todo-app.jpg',
    },
  ];
}
