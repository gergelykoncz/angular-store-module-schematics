import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { <%=classify(name)%>Effects } from './store';
import { <%=classify(name)%>Selectors } from './store/selectors';
import { <%= classify(name) %>TestComponent } from './component';

@NgModule({
  declarations: [<%= classify(name) %>TestComponent],
  imports: [CommonModule, EffectsModule.forFeature([<%=classify(name)%>Effects])],
  exports: [<%= classify(name) %>TestComponent],
  providers: [<%=classify(name)%>Selectors]
})
export class <%=classify(name)%>Module {}

export * from './store';
