import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/crud/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  formProducto: FormGroup;
  id: number;
  operacion: string = 'Agregar';
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.formProducto = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: [null, Validators.required] // Se utiliza "null" para un campo seleccionable.
    });

    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.operacion = 'Editar';
      this.getProduct(this.id);
    }
    this.getListCategory();
  }

  getListCategory() {
    this.productService.getListCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error al cargar las categorías', error);
      }
    );
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.formProducto.patchValue(data);
      },
      (error) => {
        console.error('Error al cargar el producto', error);
      }
    );
  }

  addProducto() {
    const productData = this.formProducto.value;

    if (this.id !== 0) {
      // Es una edición
      this.productService.updateProduct(this.id, productData).subscribe(
        () => {
          this.toastr.info(`El producto ${productData.name} fue actualizado con éxito. Producto Actualizado`);
          this.router.navigate(['crud']);
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
        }
      );
    } else {
      // Es una adición
      this.productService.saveProduct(productData).subscribe(
        () => {
          this.toastr.success(`El producto ${productData.name} fue registrado con éxito. Producto Registrado`);
          this.router.navigate(['crud']);
        },
        (error) => {
          console.error('Error al guardar el producto', error);
        }
      );
    }
  }
}
