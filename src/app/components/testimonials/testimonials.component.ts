import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.sass']
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations. The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome.",
      name: "John Doe",
      role: "CEO, Company XYZ",
      image: "./images/home/header.jpeg"
    },
    {
      quote: "Their attention to detail and commitment to quality is unparalleled. We highly recommend their services. Working with this team was an absolute pleasure. They delivered outstanding results that exceeded our expectations.",
      name: "Jane Smith",
      role: "Product Manager, ABC Corp",
      image: "./images/home/header.jpeg"
    },
    {
      quote: "The team was incredibly responsive and understood our needs perfectly. We couldn't be happier with the outcome. Their attention to detail and commitment to quality is unparalleled. We highly recommend their services.",
      name: "Michael Lee",
      role: "CTO, Startup Inc.",
      image: "./images/home/header.jpeg"
    },
  ];

  currentSlideIndex = 0;

  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;
  scrollToSlide(index: number) {
    const container = this.slidesContainer.nativeElement;
    const slide = container.querySelector('.testimonial');
    const slideWidth = slide.clientWidth;

    // Get the computed gap between slides
    const slideGap = parseInt(getComputedStyle(container).columnGap || '0', 10);

    // Calculate the target scroll position, including the gap
    const targetScrollPosition = index * (slideWidth + slideGap);

    // Calculate the difference between the current scroll position and the target position
    const currentScrollPosition = container.scrollLeft;
    const scrollDistance = targetScrollPosition - currentScrollPosition;

    container.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });

    this.currentSlideIndex = index;
  }

}
