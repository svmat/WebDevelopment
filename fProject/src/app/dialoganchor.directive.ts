import {Directive, ComponentFactoryResolver, ComponentFactory, ComponentRef} from '@angular/core';

import {ViewContainerRef} from '@angular/core';
import {AppointmentRequestComponent} from './appointment-request/appointment-request.component';

@Directive({
  selector: '[dialogAnchor]'
})

export class DialogAnchorDirective {
    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

    createDialog(dialogComponent: { new(): AppointmentRequestComponent }): ComponentRef<AppointmentRequestComponent> {
        this.viewContainer.clear();

        let dialogComponentFactory =
          this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });

        return dialogComponentRef;
    }
}
