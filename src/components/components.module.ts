import { NgModule } from '@angular/core';
import { ShopSpecModalComponent } from './shop-spec-modal/shop-spec-modal';
import { MyComponent } from './my/my';
import { RestaurantComponent } from './restaurant/restaurant';
@NgModule({
	declarations: [ShopSpecModalComponent,
    MyComponent,
    RestaurantComponent],
	imports: [],
	exports: [ShopSpecModalComponent,
    MyComponent,
    RestaurantComponent]
})
export class ComponentsModule {}
