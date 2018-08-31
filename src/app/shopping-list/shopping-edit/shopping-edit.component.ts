import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInoutRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppinglistService.addIngredient(
      new Ingredient(this.nameInoutRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value)
    );
  }

}
