import { Directive ,ElementRef,AfterViewInit,Input,OnChanges} from '@angular/core';

import tippy from 'tippy.js'

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit {

  @Input('appToolTip') tooltipContent!:string
  tippyInstance : any;
  constructor(private elRef:ElementRef) { }

  ngAfterViewInit(): void {
   this.tippyInstance =  tippy(this.elRef.nativeElement,{
      content: this.tooltipContent
    })
  }
  updateToolTipContent(){
    if(this.tippyInstance){
      this.tippyInstance.setContent(this.tooltipContent)
    }
  }
}
