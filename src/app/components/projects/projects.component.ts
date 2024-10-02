import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
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
