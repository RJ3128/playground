import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './quick-list.component.html',
  styleUrl: './quick-list.component.css',
})
export class QuickListComponent {
  @ViewChild('entryInput') entryInput!: ElementRef;
  public quickList: string[] = [];
  public listEntry: string = '';

  constructor() {
    this.getQuickList();
  }

  getQuickList() {
    const currentList = localStorage.getItem('quickList');
    if (currentList) this.quickList = JSON.parse(currentList);
  }

  onAddEntry() {
    if (this.listEntry && this.listEntry !== '') {
      this.quickList.push(this.listEntry);
      localStorage.setItem('quickList', JSON.stringify(this.quickList));
    }
    this.listEntry = '';
    this.getQuickList;
    this.focusEntryInput();
  }

  clearList() {
    localStorage.removeItem('quickList');
    this.quickList = [];
  }

  focusEntryInput() {
    this.entryInput.nativeElement.focus();
  }
}
