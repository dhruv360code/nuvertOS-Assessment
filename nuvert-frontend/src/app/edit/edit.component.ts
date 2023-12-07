import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  compoundDetail: any;
  compoundId: string | null = "";

   onInputChangeName = (event: any) => {
    this.compoundDetail.name = event.target.value;
  }
   onInputChangeDescription = (event: any) => {
    this.compoundDetail.description = event.target.value;
  }
   onInputChangeUrl = (event: any) => {
    this.compoundDetail.formula = event.target.value;
  }

  onSubmit (event: any ):void {
    event.preventDefault();
    console.log('Compound Data:', this.compoundDetail);
    this.apiService.updateData(this.compoundDetail)
      .then(response => {
        console.log('Compound Data:', response);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }


  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.compoundId = params.get('id');
      console.log('ID from URL from edit component:', this.compoundId);
    });
    this.getCompoundData(this.compoundId)
  }
 
  getCompoundData(compoundId: string | null): void {
    // Use the service method to make the GET request
    this.apiService.getData(compoundId)
      .then(response => {
        console.log('Compound Data:', response);
        this.compoundDetail = response;
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

}


