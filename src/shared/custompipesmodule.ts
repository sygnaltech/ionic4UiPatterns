import { NgModule } from '@angular/core';
import { EnumKeysPipe } from './enum-keys.pipe';

@NgModule({
    declarations: [ EnumKeysPipe ],
    exports: [ EnumKeysPipe ]
  })
  export class CustomPipesModule {}