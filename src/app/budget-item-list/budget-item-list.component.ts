import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> =
    new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit();
  }

  onCardClicked(item: BudgetItem) {
    // show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      //check if result has value
      if (result) {
        //result is the update budget item
        //replace the item with the updated/submitted item from the form
        //this.budgetItems[this.budgetItems.indexOf(item)] = result;

        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}
