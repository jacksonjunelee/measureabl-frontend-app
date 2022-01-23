import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import {ageData, DataNameService, nameData} from '../services/data-name.service';

interface DataName {
    id?: string;
    age?: number;
    firstName?: string;
    lastName?: string;
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public dataRow: DataName[] = []

  constructor(private dataNameService: DataNameService) {}

  ngOnInit(): void {
    combineLatest(this.dataNameService.getAge(), this.dataNameService.getNames()).subscribe(([ageData, nameData]: any) => {
        // merge ageData and nameData to a single merged array
        const mergedArray = nameData.map((name: nameData) => ({...name, ...ageData.find((age: ageData) => name.id === age.id)}));
        ageData.forEach((age: ageData) => {
            if (!mergedArray.find((name: nameData) => name.id === age.id)) {
                mergedArray.push(age);
            }
        })
        
        this.dataRow = [
            ...this.dataRow,
            ...mergedArray
        ]
    })
  }
}
