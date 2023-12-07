import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compound-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './compound-list.component.html',
  styleUrl: './compound-list.component.css'
})
export class CompoundListComponent {
  constructor(private apiService: ApiService) {}
  compoundList: any;
  data: any = null;
  pageNumber: number = 0;
  pageLimit: number = 4;
  ngOnInit(): void {
    // Call the service method when the component initializes
    this.getCompoundsList(this.pageNumber, this.pageLimit);
  }
  nextPage(): void {
    this.pageNumber++;
    this.getCompoundsList(this.pageNumber, this.pageLimit);
  }
  previousPage(): void {
    this.pageNumber--;
    this.getCompoundsList(this.pageNumber, this.pageLimit);
  } 

  getCompoundsList(pageNumber: number, pageLimit: number): void {
    // Use the service method to make the GET request
    this.apiService.getAllCompounds(pageNumber, pageLimit)
      .then(response => {
        console.log(response.data);
        this.compoundList = response.data;
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

}
