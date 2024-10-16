import { Component } from '@angular/core';
export interface Formation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-condidates',
  templateUrl: './condidates.component.html',
  styleUrls: ['./condidates.component.css']
})
/*export class SelectOverviewExample {
  formations: Formation[] = [
    {value: 'springboot-0', viewValue: 'Spring boot'},
    {value: 'angular-1', viewValue: 'Angular '},
    {value: 'javascript-2', viewValue: 'Javascript'}
  ];
}*/
export class CondidatesComponent {
  formations: Formation[] = [
    {value: 'springboot-0', viewValue: 'Spring boot'},
    {value: 'angular-1', viewValue: 'Angular '},
    {value: 'javascript-2', viewValue: 'Javascript'}
  ];

}
