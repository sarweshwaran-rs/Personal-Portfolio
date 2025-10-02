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
      description: "Co-authored a book chapter on cassava plant disease detection leveraging Deep Learning and Generative AI. Implemented CNNs, Vision Transformers, and a Variational Autoencoder, achieving ~95% accuracy and demonstrating the effectiveness of generative models for anomaly detection in agriculture.",
      keyAchievements: [
        "Achieved ~95% accuracy using a Variational Autoencoder for disease classification",
        "Developed a robust training pipeline with advanced data augmentation techniques",
        "Demonstrated the potential of Generative AI for anomaly detection in agriculture"
      ],
      technologies: [
        "Python", "Deep Learning", "Vision Transformer", "VGG16", "VAE", "PyTorch"
      ],
      dataset: "Kaggle Cassava Leaf Disease Dataset - 17,938 images (5 classes, Natural Sunlight, 800x600 resolution, split into 70:15:15)",
      results: "VAE achieved ~95% accuracy vs. ~80% with the best deep learning model, demonstrating superiority of generative approaches.",
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
