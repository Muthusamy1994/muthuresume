import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private router:Router, route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.router.navigate(['resume2']);
  }
}
