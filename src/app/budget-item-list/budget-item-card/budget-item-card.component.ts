import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  onXButtonClick() {
    //here we want emit an event
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
