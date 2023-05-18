import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  //la classe definisce una proprietà chiamata prodotto con un decoratore
  //@Input() che indica che il valore della proprietà passa dentro il component
  //padre productListComponent
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
