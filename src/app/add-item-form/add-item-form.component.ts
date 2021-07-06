import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter();

  isNewItem: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    const {description, amount} = this.item;
    
    //if item has a value
    if (description !=='' && amount) {
      //this means thah an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item= new BudgetItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    //send the form value
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
