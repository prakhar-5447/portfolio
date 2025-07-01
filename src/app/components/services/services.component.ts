import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass'],
})
export class ServicesComponent {
  services = [
    {
      id: '01',
      title: 'Software',
      subtitle: 'Developer',
      desc: 'Worked on both MEAN/MERN Stack, create Restful API and use axios and fetch, endpoints. Also experience with Java Springboot and Golang in the backed side. Try both MongoDB and MySQL, and Tailwind in the frontend side.',
    },
    {
      id: '02',
      title: 'UI/UX',
      subtitle: 'Designer',
      desc: 'Worked on React Native, and  firebase as backend, multi page component and customized side navigation bar. And learned flutter and currently working on flutter project where Golang will be backend.',
    },
    {
      id: '03',
      title: 'Motion',
      subtitle: 'Designer',
      desc: 'Basic knowledge of designing, always used to design before start coding. I use Figma and Adobe Illustrator for artwork like channel art and thumbnails for youtube. ',
    },
  ];
}
