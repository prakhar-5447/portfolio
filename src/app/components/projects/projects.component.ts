import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

  activeIndex: number | null = null;

  moreProjects = [
    {
      name: 'GoDB (Server + SDK)',
      description: 'A lightweight SQL database system built with Golang, consisting of a gRPC-based server and a client SDK. The server runs locally or via Docker, while the SDK (similar to Mongoose for MongoDB) provides easy-to-use methods like createUser, createTable, InsertRecords and more for seamless database interaction.',
      links: [
        {
          label: 'GitHub (Server)',
          url: 'https://github.com/prakhar-5447/GoDB'
        },
        {
          label: 'GitHub (SDK)',
          url: 'https://github.com/prakhar-5447/GoDB_SDK_GO'
        }
      ]
    }, {
      name: 'Devstash',
      project_type: 'Group',
      description: 'A Flutter-based mobile application that allows users to create profiles and showcase their projects by adding titles, descriptions, and links, similar to a developer-focused Linktree. Implemented secure user authentication and profile management to enable personalized access and easy editing of project information. Integrated Firebase as the backend for authentication and real-time data storage, ensuring reliable data synchronization and smooth app performance. The app provides a simple and efficient platform for developers to organize and share their personal projects through a mobile interface.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/prakhar-5447/devstash-flutter',
        }
      ]
    },
    {
      name: 'RahoBharat',
      project_type: 'Group',
      description: 'A Flutter-based mobile application designed to help students find affordable rooms, hostels, and shared accommodations near their colleges. The app allows users to browse available listings, view details such as rent, location, and amenities, and connect with property owners or roommates. Features include room-sharing options, user-friendly search and filtering, and profile-based interactions to simplify the housing search process. The project focused on creating a simple and accessible platform to address the common challenge students face when searching for accommodation in a new city.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/prakhar-5447/rahobharat',
        }
      ]
    },
    {
      name: 'Simple Bank API',
      description: 'A backend banking service built with Golang that supports account creation, balance management, and transaction-safe money transfers. Implements database transactions to ensure consistency, where transfers either fully succeed or fail without partial updates. Also tracks all balance changes through account entries, providing a clear audit trail of operations. Focused on learning backend architecture, REST/gRPC APIs, and reliable data handling.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/prakhar-5447/golang-project'
        }
      ]
    },
    {
      name: 'Flutter Learning',
      description: 'A collection of Flutter applications developed while exploring core mobile development concepts such as state management, navigation, and API integration. Includes projects like an expense tracker (data handling & UI), meal app (filters & categories), shopping app (cart and state management), and quiz app (user interaction & logic). Focused on building reusable components, responsive UI, and understanding real-world app patterns.',
      links: [
        {
          label: 'GitHub (All Projects)',
          url: 'https://github.com/prakhar-5447/Flutter-Projects'
        }
      ]
    },
    {
      name: 'UI/UX Design (Figma)',
      project_type: 'Collaborative Work',
      description: 'A collection of UI/UX designs created in Figma, including full web and Android app interfaces. Focused on layout systems, user flows, consistency, and modern design patterns to create intuitive and scalable user experiences. Includes design explorations as well as interfaces for projects mentioned above, showcasing the transition from concept to implementation.',
      links: [
        {
          label: 'View Web Designs',
          url: 'https://www.figma.com/design/00Ash95cQKgoKdPqSp9Li3/projects-web?node-id=0-1&t=l8SxhFOf8WCZGyQN-1'
        },
        {
          label: 'View Android Designs',
          url: 'https://www.figma.com/design/Qg8OrgR2RTo4KHEXrjzviO/projects-android?node-id=0-1&t=Eq5nZzg3KOFzCFWa-1'
        }
      ]
    },
    {
      name: 'Visual & Motion Design',
      project_type: 'Collaborative Work',
      description: 'A collection of creative work including Photoshop, Illustrator, and After Effects projects. Covers social media creatives, posters, branding explorations, and motion design, showcasing skills in visual storytelling, composition, and design tools.',
      links: [
        {
          label: 'Instagram Portfolio',
          url: 'https://instagram.com/pixel8cloud'
        }
      ],
      designImages: [{
        src: '/images/projects/post_1.jpg',
        title: 'Product Poster Design',
      },
      {
        src: '/images/projects/post_2.jpg',
        title: 'Poster Design',
      },
      {
        src: '/images/projects/post_3.jpg',
        title: 'Illustrator',
      },
      {
        src: '/images/projects/post_4.jpg',
        title: 'Motion Frame',
      }]
    }
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

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
