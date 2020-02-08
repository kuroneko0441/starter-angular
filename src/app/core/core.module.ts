import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
  ],
})
export class CoreModule {
  public constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule already imported. You should import CoreModule in AppModule only.');
    }
  }
}
