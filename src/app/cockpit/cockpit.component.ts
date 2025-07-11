import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;
  onAddServer(nameInput) {
    console.log('SERVER NAME INPUT: ',nameInput.value);
    console.log('CONTENT INPUT: ',this.serverContentInput);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
    
  }
  
  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
    
  }
}
