import { Component, Input, OnInit } from "@angular/core";
import { IBackendErrors } from "../types/backend-errors.interface";
import { NgFor } from "@angular/common";

@Component({
  selector: 'backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  standalone: true,
  imports: [NgFor]
})
export class BackendErrorMessages implements OnInit {
  @Input({required: true}) backendErrors: IBackendErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
      this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
        const messages = this.backendErrors[name].join(' ');
        return `${messages}`;
      })
  }
}
