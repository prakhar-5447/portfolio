import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.sass']
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations. The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome.",
      name: "John Doe",
      role: "CEO, Company XYZ",
      image: "/portfolio/assets/images/home/header.jpeg"
    },
    {
      quote: "Their attention to detail and commitment to quality is unparalleled. We highly recommend their services. Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations.",
      name: "Jane Smith",
      role: "Product Manager, ABC Corp",
      image: "/portfolio/assets/images/home/header.jpeg"
    },
    {
      quote: "The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome. Their attention to detail and commitment to quality is unparalleled. We highly recommend their services.",
      name: "Michael Lee",
      role: "CTO, Startup Inc.",
      image: "/portfolio/assets/images/home/header.jpeg"
    },
  ];

  currentSlideIndex = 0;
  slideInterval: any;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  startSlider() {
    this.slideInterval = setInterval(() => this.scroll(), 5000);
  }

  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

  scroll() {
    const container = this.slidesContainer.nativeElement;
    const slideWidth = container.querySelector('.testimonial').clientWidth;
    const scrollAmount = slideWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
      this.currentSlideIndex = 0;
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      this.currentSlideIndex++;
    }
  }

  scrollToSlide(index: number) {
    clearInterval(this.slideInterval);
    const container = this.slidesContainer.nativeElement;
    const slideWidth = container.querySelector('.testimonial').clientWidth;

    const targetScrollPosition = index * slideWidth + index * 60;

    container.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth'
    });

    this.currentSlideIndex = index;
    this.startSlider();
  }
}
