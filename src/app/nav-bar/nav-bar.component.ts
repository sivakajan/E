import { Component, OnInit } from '@angular/core';
import { BackServiceServiceService } from '../back-service-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  total:any;
  om:any
  name:any

  constructor(private bacedin:BackServiceServiceService) { }

  ngOnInit(): void {

      this.bacedin.take_item_count().subscribe(
        data=>this.total=data
      )


    this.om=this.bacedin;
  }

}
