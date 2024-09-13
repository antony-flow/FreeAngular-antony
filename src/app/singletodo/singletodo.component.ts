import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singletodo',
  standalone: true,
  imports: [],
  templateUrl: './singletodo.component.html',
  styleUrl: './singletodo.component.css',
})
export class SingletodoComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); // {id: "some_id"}
    });
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams); // {queryParam: "some_value"}
    });

    // Get the complete route URL
    console.log(this.router.url); // /some-route

  
  }
}
