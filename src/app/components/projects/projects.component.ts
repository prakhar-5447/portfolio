import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Juicy-N-Yummy',
      github_link: 'https://github.com/pratham-0094/Juicy-N-Yummy',
      link: 'https://pratham-0094.github.io/Juicy-N-Yummy',
      src: '/portfolio/assets/images/projects/juicy-n-yummy.png',
    },
    {
      title: 'Eventflow',
      github_link: 'https://github.com/prakhar-5447/eventflow',
      link: 'https://raw.githubusercontent.com/prakhar-5447/eventflow/main/eventflow.apk',
      src: '/portfolio/assets/images/projects/eventflow.png',
    },
    {
      title: 'Airmeal',
      github_link: 'https://github.com/prakhar-5447/airmeal',
      link: 'https://prakhar-5447.github.io/airmeal',
      src: '/portfolio/assets/images/projects/airmeal.png',
    },
    {
      title: 'Motion.io',
      github_link: 'https://github.com/prakhar-5447/motion_io',
      link: 'https://prakhar-5447.github.io/motion_io',
      src: '/portfolio/assets/images/projects/motion_io.png',
    },
  ];

  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

  scroll() {
    const container = this.slidesContainer.nativeElement;
    const slideWidth = container.querySelector('.slide').clientWidth;
    const scrollAmount = slideWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
