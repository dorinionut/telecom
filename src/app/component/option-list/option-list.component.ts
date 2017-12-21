import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Option } from '../../model/option.model';
import { OptionService } from '../../service/option.service';

@Component({
  selector: 'option-list',
  templateUrl: 'option-list.component.html',
  styleUrls: ['option-list.component.less']
})
export class OptionListComponent implements OnInit {

  @Output('onSelect')
  private onSelect : EventEmitter<any> = new EventEmitter();
  public options : Option[] = [];
  @Input()
  private planID : string;
  public selectedOptionID : string;

  constructor (
    private optionService : OptionService
  ) {  }

  ngOnInit() {
    this.optionService.list(new HttpParams().append('plans', this.planID)).subscribe(options => this.options = options);
  }

  selectOption(id: string) {
    if(this.selectedOptionID != id) {
      this.selectedOptionID = id;

      let selectedOption = this.options.filter(option => option.id == id)[0];
      this.onSelect.emit(selectedOption);
    }
    else {
      this.selectedOptionID = '';
      this.onSelect.emit(null);
    }
  }
}
