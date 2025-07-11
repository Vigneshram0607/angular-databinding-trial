import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  onAddServer(nameInput, contentInput) {
    console.log('SERVER NAME INPUT: ',nameInput.value);
    console.log('SERVER CONTENT INPUT: ',contentInput.value);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: contentInput.value})
    
  }
  
  onAddBlueprint(nameInput, contentInput) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: contentInput.value})
    
  }
}
