import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'portfolio';

  nav_toggle() {
    if (document.getElementById('nav')?.style.right == '0px') {
      document.getElementById('nav')!.style.right = '-300px';
      document.getElementById('nav')!.style.visibility = 'hidden';
      document.getElementById('icon')!.style.transform = 'rotate(0deg)';
    } else {
      document.getElementById('nav')!.style.right = '0px';
      document.getElementById('nav')!.style.visibility = 'visible';
      document.getElementById('icon')!.style.transform = 'rotate(90deg)';
    }
  }

  active_toogle(tag: string) {
    let section = document.getElementById(tag);
    let height = section?.offsetTop || 0;
    window.scrollTo(0, height);
  }

  // AUTO ACTIVE ON SCROLL
  @HostListener('window:scroll', [])
  onScroll(): void {

    // if (document.getElementById('nav')?.style.right == '0px') {
    //   document.getElementById('nav')!.style.right = '-310px';
    //   document.getElementById('icon')!.style.transform = 'rotate(0deg)';
    // }

    const sections = document.querySelectorAll('section');
    const NavLi = document.querySelectorAll('nav ul li');
    let current: string = '';
    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id') ?? '';
      }
    });

    NavLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
  }

  @HostListener('window:load', [])
  onLoad(): void {
    const loader = document.getElementById('loader');
    // Hide the loader after 5 seconds
    setTimeout(function () {
      loader!.style.display = 'none';
    }, 1000); // 5000 milliseconds = 5 seconds

  }

}
