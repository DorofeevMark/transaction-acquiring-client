import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent implements OnInit, OnDestroy {
  public errorMessages = [];
  private valueChangeSubscription: Subscription;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit() {
    this.valueChangeSubscription = this.control.valueChanges.subscribe(changes => {
      this.errorMessages = [];
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

  ngOnDestroy() {
    this.valueChangeSubscription.unsubscribe();
  }
}
