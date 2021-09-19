import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EnviarComponent } from './enviar/enviar.component';
import { ReceberComponent } from './receber/receber.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EnviarComponent,
    ReceberComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
