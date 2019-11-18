import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { IOption } from '../../model/option.interface';
import { OptionService } from '../../service/option.service';

@Component({
  selector: 'app-option-list',
  templateUrl: 'option-list.component.html',
  styleUrls: ['option-list.component.less']
})
export class OptionListComponent implements OnInit {

  @Output()
  private onSelect: EventEmitter<any> = new EventEmitter();

  public options: IOption[] = [];

  @Input()
  private planID: string;

  public selectedOption: IOption;

  constructor (
    private optionService: OptionService
  ) {  }

  ngOnInit() {
    this.optionService.list(new HttpParams().append('plans', this.planID))
      .subscribe(options => this.options = options);
  }

  selectOption(option: IOption) {
    this.selectedOption = option;
    this.onSelect.emit(this.selectedOption);
  }
}
