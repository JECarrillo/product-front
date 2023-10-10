import { Component } from '@angular/core';
import { ProductsService } from './crud/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService]
})
export class AppComponent {
  title = 'product-food-front';

}
