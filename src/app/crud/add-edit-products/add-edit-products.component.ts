import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../interfaces/products';
import { ProductsService } from 'src/app/crud/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  formProducto: FormGroup;
  id: number;
  operacion: string = 'Agregar ';


  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private _productService: ProductsService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.formProducto = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });




    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.formProducto.patchValue({
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price
      });
    });
  }

  addProducto() {
    const Product = {
      id: this.formProducto.value.id,
      name: this.formProducto.value.name,
      description: this.formProducto.value.description,
      price: this.formProducto.value.price,
    };

    if(this.id !== 0 ) {
      //es editar
      Product.id = this.id;
      this._productService.updateProduct(this.id, Product).subscribe(() => {
        this.toastr.info(`El producto ${Product.name} fue actualizado con éxito, Producto Actualizado`);
        this.router.navigate(['crud']);
      })
    }else{

      this._productService.saveProduct(Product).subscribe(() => {
        this.toastr.success(`El producto ${Product.name} fue registrado con éxito, Producto Registrado`);
        this.router.navigate(['crud']);
      });
    }
    this.changeDetectorRef.detectChanges();
  }
}

