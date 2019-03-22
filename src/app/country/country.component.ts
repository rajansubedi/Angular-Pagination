import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private page = 0;
  countries: Array<any>;
  pages: Array<number>;

  constructor(private myService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  setPage(i, $event) {
    this.page = i;
    this.getCountries();

  }

  getCountries() {
    return this.myService.getCountries(this.page).subscribe(
      data => {
        console.log(data);
        this.countries = data.content;
        this.pages = new Array(data.totalPages);
      },
      (error) => {
        console.log(error.error.message);
      }
    );

  }

}
