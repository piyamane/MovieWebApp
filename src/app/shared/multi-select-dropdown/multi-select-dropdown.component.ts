import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent {
  @Input()
  uniqueGenresPair!: any[];

  @Output() selectedGenreList = new EventEmitter();
  @Output() shareIndividualGenre = new EventEmitter();

  checkedList: any[];
  currentSelected!: {};
  showDropDown = false;

  constructor() {
    this.checkedList = [];
  }

  getSelectedValue(status: Boolean, value: String) {
    if (status) {
      this.checkedList.push(value);
    } else {
      var index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };

    //share checked list
    this.setSelectedGenreList();

    //share individual selected item
    this.setIndividualStatus();
  }
  setSelectedGenreList() {
    this.selectedGenreList.emit(this.checkedList);
  }
  setIndividualStatus() {
    this.shareIndividualGenre.emit(this.currentSelected);
  }



}
