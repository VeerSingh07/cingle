import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-heading',
  templateUrl: './title-heading.component.html',
  styleUrls: ['./title-heading.component.scss']
})
export class TitleHeadingComponent implements OnInit {
	@Input() heading;
  constructor() { }

  ngOnInit() {
  }

}
