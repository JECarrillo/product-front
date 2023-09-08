import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  formProducto: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formProducto = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: [, Validators.required],
      price: [, Validators.required]
    })
  }

  ngOnInit(): void {

  }

  addProducto() {
    /*const Product: Product = {
      id:
    }*/
    // console.log(this.formProducto.value.name)
    // console.log(this.formProducto.get('name')?.value);

    const Product ={
      id: this.formProducto.value.id,
      name: this.formProducto.value.name,
      description: this.formProducto.value.description,
      price: this.formProducto.value.price,
    }
    console.log(Product)
  }


}
