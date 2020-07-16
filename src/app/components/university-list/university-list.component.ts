import { Component, OnInit } from '@angular/core';
import { University } from '@app/shared/models/university.model';
import { UniversityApiService } from '@app/shared/services/universities.api.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.less']
})
export class UniversityListComponent implements OnInit {
  universities: University[];
  pageOfUniversities: University[];
  currentPage: number = 1;
  loading: boolean;
  error: boolean;
  errorText: string;

  constructor(private dataService: UniversityApiService) {
    this.error = false;
    this.loadData();
  }

  ngOnInit() {
  }

  loadData(): void {
    this.loading = true;
    this.error = false;

    this.dataService.getUniversities().subscribe(result => {
      this.universities = result;
      this.loading = false;
    }, error => {
      this.universities = [],
      this.error = true;
      this.errorText = 'An unexpected error has occurred.  Please try again later.';
      this.loading = false;
      console.log(error);
    });
  }

  onChangePage(pageOfUniversities: University[]) {
    this.pageOfUniversities = pageOfUniversities;
  }
}
