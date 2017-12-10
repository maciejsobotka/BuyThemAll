import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../shared/services/data.service';
import { IVoivodeship } from '../../shared/models/voivodeship';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{9}$/;
const ZIP_CODE_REGEX = /^[0-9]{2}-[0-9]{3}$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Voivodeships: IVoivodeship[];

  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(ZIP_CODE_REGEX)]),
    city: new FormControl('', Validators.required),
    voivodeship: new FormControl('', Validators.required),
  });

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getVoivodeships()
    .subscribe(voiv => {
      this.Voivodeships = voiv;
    });
  }

  completeOrder() {
    if (this.checkoutForm.valid) {
      this.router.navigate(['/order-complete']);
    }
  }
}
