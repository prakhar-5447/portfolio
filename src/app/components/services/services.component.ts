import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass'],
})
export class ServicesComponent {
  services = [
    {
      names: 'Web',
      logo:'/assets/images/services/web.svg',
      desc: 'Worked on both MEAN/MERN Stack, create Restful API and use axios and fetch, endpoints. Also experience with Java Springboot and Golang in the backed side. Try both MongoDB and MySQL, and Tailwind in the frontend side.',
    },
    {
      names: 'Mobile',
      logo:'/assets/images/services/mobile.svg',
      desc: 'Worked on React Native, and  firebase as backend, multi page component and customized side navigation bar. And learned flutter and currently working on flutter project where Golang will be backend.',
    },
    {
      names: 'Design',
      logo:'/assets/images/services/design.svg',
      desc: 'Basic knowledge of designing, always used to design before start coding. I use Figma and Adobe Illustrator for artwork like channel art and thumbnails for youtube. ',
    },
  ];
}
