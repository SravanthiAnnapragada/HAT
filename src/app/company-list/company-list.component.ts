import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {

  constructor(private CompanyListService: DataService) { }
  // constructor(private CompanyListService: DataService, 
  //   private renderer:Renderer, private router : Router) { }

  CompanyList: any = [];

  ModalFormData: any = {
    cname: '',
    acomments: '',
    address: '',
    website: '',
    contactno: '',
    tagging: '',
    zcomments: '',
    ztagging: ''
  };

  //clist:any={};

  ngOnInit() { //to get the data on load of page

    this.CompanyListService.FetchData()
      .subscribe(data => {
        this.CompanyList = data.CompaniesList;
        //console.log(this.CompanyList);
      }), ((error) => console.log(error)
      );

  }
  //to get data row wise for each record  i is the unique id of json records in companies.json
  // onEdit(){
  //   this.CompanyListService.FetchData()
  //   .subscribe(data1=>{
  //     for(let i=0; i<data1.CompaniesList.length;i++){
  //       if(data1.CompaniesList[i].id == (i + 1)){
  //         this.clist = data1.CompaniesList[i];
  //         //console.log(this.clist);

  //       }
  //     }
  //   }
  //   ),(error => console.log(error));
  // }

  //using event handler and capturing the data in html
  /*public UpdateData = '';
  public UpdateData1 = '';
  public UpdateData2 = '';
  public UpdateData3 = '';
  public UpdateData4 = '';*/
  onRow(event) {
    this.CompanyListService.FetchData()
      .subscribe(data => {
        this.CompanyList = data.CompaniesList;
        //console.log(this.CompanyList);
      }), ((error) => console.log(error)
      );

    // this.UpdateData= event.srcElement.innerHTML;
    //console.log(event);
    /*this.UpdateData = event.path[3].cells[0].innerHTML;
    this.UpdateData1 = event.path[3].cells[1].innerHTML;
    this.UpdateData2 = event.path[3].cells[2].innerHTML;
    this.UpdateData3 = event.path[3].cells[3].innerHTML;
    this.UpdateData4 = event.path[3].cells[4].innerHTML;*/


    // console.log(event.srcElement);
  }

  toPostUpdatedData() {
    // this.CompanyListService.PostNewData()
    //   .subscribe(data => {
    //     this.CompanyList = data.CompaniesList;
    //     console.log(this.CompanyList);
    //   }), ((error) => console.log(error)
    //   );

  }

  //modalform data 

  onSubmit(value: any) {
    

  }


}
