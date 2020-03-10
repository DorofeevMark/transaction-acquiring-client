import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent implements OnInit {
  public errorMessages = [];
  @Input() control: FormControl;
  constructor() {}

  ngOnInit() {
    this.control.valueChanges.subscribe(changes => {
      this.errorMessages = [];
      console.log(this.control);
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName)
        ) {
          this.errorMessages.push(ValidationService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          ));
        }
      }
    });
  }
}
