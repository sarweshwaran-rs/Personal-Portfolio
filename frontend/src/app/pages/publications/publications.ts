import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Publication {
  title: string;
  type: string;
  chapter: string;
  book: string;
  publisher: string;
  role: string;
  year: number;
  description: string;
  keyAchievements: string[];
  technologies: string[];
  dataset: string;
  results: string;
  url: string;
  orcidId: string;
  accessbook: string
}


interface PublicationProfile {
  name: string;
  description: string;
  svg: string;
  profile: string
}

@Component({
  selector: 'app-publications',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './publications.html',
  styleUrl: './publications.css'
})

export class Publications {
  publications: Publication[] = [
    {
      title: "Plant Disease Detection Using Generative AI and Deep Learning Models",
      type: "Book-Chapter",
      chapter: "Chapter 9",
      book: "Humans and Generative AI Tools for Collaborative Intelligence",
      publisher: "IGI Global Scientic Publishing",
      role: "Co-author",
      year: 2025,
      description: "Co-authored research on cassava plant disease detection using Deep Learning and Generative AI models.",
      keyAchievements: [
        "Developed a 5-class cassava plant disease detection system",
        "Achieved 95% accuracy using Variational Autoencoder",
        "Designed a robust pipeline with augmentation",
        "Showcased Generative AI for anomlay detection"
      ],
      technologies: [
        "Python", "Deep Learning", "Vision Transformer", "VGG16", "VAE", "PyTorch"
      ],
      dataset: "Kaggle Cassava Leaf Disease Dataset - 17,938 images (5 classes, Natural Sunlight, 800x600 resolution, split into 70:15:15)",
      results: "VAE achieved ~95% accuracy vs. ~80% with the best deep learning model, demonstrating superiority of generative approaches.",
      url: "https://www.igi-global.com/book/humans-generative-tools-collaborative-intelligence/350260",
      orcidId: "https://doi.org/10.4018/979-8-3693-8332-2.ch009",
      accessbook: "./assets/research-paper.pdf"
    }
  ];

  publicationProfiles : PublicationProfile[] = 
  [
    {
      name: "ORCIE",
      description: "Researcger identifier record",
      svg: "assets/images/orcid.svg",
      profile: "https://orcid.org/0009-0005-2073-7442"
    },
    {
      name: "Research Gate",
      description: "Research articles, Collaborations & Network",
      svg: "assets/images/researchgate.svg",
      profile: "https://www.researchgate.net/profile/Sarweshwaran-R-S?ev=hdr_xprf"
    }
  ]
}
