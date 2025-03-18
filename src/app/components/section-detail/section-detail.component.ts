import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Add this for the back button
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Import Location service
import { DataService, Section, SubSection } from '../../services/data.service';

@Component({
  selector: 'app-section-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './section-detail.component.html',
  styleUrl: './section-detail.component.scss',
})
export class SectionDetailComponent implements OnInit {
  section: Section | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location // Inject Location service
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.section = this.dataService.getSections().find((s) => s.id === id);
  }

  isSubSection(item: string | SubSection): item is SubSection {
    return (item as SubSection).subtitle !== undefined;
  }

  goBack(): void {
    this.location.back(); // Navigate back to Home
  }
  //   throw new Error('Method not implemented.');
  // }
}
