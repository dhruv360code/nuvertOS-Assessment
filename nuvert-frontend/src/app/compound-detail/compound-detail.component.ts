import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-compound-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compound-detail.component.html',
  styleUrl: './compound-detail.component.css'
})
export class CompoundDetailComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  compoundDetail: any;
  compoundId: string | null = "";
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.compoundId = params.get('id');
      console.log('ID from URL:', this.compoundId);
    });
    this.getCompoundData(this.compoundId)
  }
 

  getCompoundData(compoundId: string | null): void {
    // Use the service method to make the GET request
    this.apiService.getData(compoundId)
      .then(response => {
        console.log('Compound Data:', response);
        console.log(response);
        this.compoundDetail = response;
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

}
