import { DComponent } from './d/d.component';
import {
  Component,
  SystemJsNgModuleLoader,
  Compiler,
  NgModuleRef,
  NgModuleFactory,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'injectorTree';

  @ViewChild('temp', { static: true }) template: TemplateRef<any>;

  test = DComponent;
  moduleFactory: NgModuleFactory<any>;

  constructor(private compiler: Compiler) {}

  testLazyLoad() {
    import('./d/d.module')
      .then(m => this.compiler.compileModuleAsync(m.DModule))
      .then(moduleFactory => {
        this.moduleFactory = moduleFactory;
      });
  }
}
