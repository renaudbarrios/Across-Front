import { Component, OnInit, Renderer2 , Input ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})

export class TwitterComponent implements OnInit {
  
  @Input() user!: string;

  constructor(private renderer2: Renderer2,private el: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let scriptEl = document.createElement('script');
    scriptEl.src = "https://platform.twitter.com/widgets.js"

    this.renderer2.appendChild(this.el.nativeElement, scriptEl);

  }

}
