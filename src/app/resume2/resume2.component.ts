import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.css']
})
export class Resume2Component implements OnInit {

  constructor(private router:Router, route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  previousPage(){
this.router.navigate(['resume']);
  }
}
