import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Publication {
  image: string;
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
  orcidId: string;
  accessbook: string;
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
      image: "assets/images/leaf.jpg",
      title: "Plant Disease Detection Using Generative AI and Deep Learning Models",
      type: "Book-Chapter",
      chapter: "Chapter 9",
      book: "Humans and Generative AI Tools for Collaborative Intelligence",
      publisher: "IGI Global Scientic Publishing",
      role: "Co-author",
      year: 2025,
      description: "Co-authored a book chapter on cassava plant disease detection leveraging Deep Learning and Generative AI. Implemented CNNs, Vision Transformers, and a Variational Autoencoder, achieving ~95% accuracy and demonstrating the effectiveness of generative models for anomaly detection in agriculture.",
      keyAchievements: [
        "Achieved ~95% accuracy using a Variational Autoencoder for disease classification.",
        "Developed a robust training pipeline with advanced data augmentation techniques.",
        "Demonstrated the potential of Generative AI for anomaly detection in agriculture."
      ],
      technologies: [
        "Python", "Deep Learning", "VGG16", "VAE", "PyTorch"
      ],
      dataset: "Kaggle Cassava Leaf Disease Dataset",
      results: "Proposed model achieved 95% the original baseline achieved 80%",
      orcidId: "https://doi.org/10.4018/979-8-3693-8332-2.ch009",
      accessbook: "./assets/research-paper.pdf"
    }
  ];

  publicationProfiles : PublicationProfile[] = 
  [
    {
      name: "ORCID",
      description: "Researcher identifier record",
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
