import {
    Directive,
    ElementRef,
    HostListener
} from "@angular/core";

@Directive({
    selector: '[igInput]',
    host: {
        '[class.ig-form-group__input]': 'true',
        '[class.ig-form-group__input--filled]': 'filled',
        '[class.ig-form-group__input--focused]': 'focused',
        '[class.ig-form-group__input--placeholder]': 'placeholder'
    }
})
export class IgInput {

    focused: boolean;

    constructor(protected el: ElementRef) {}

    @HostListener('focus', ['$event'])
    onFocus(event) {
        this.focused = true;
    }

    @HostListener('blur', ['$event'])
    onBlur(event) {
        this.focused = false;
    }

    get filled() {
        let value = this.el.nativeElement.value;
        return value && (value !== '');
    }


    get placeholder() {
        return this.el.nativeElement.getAttribute('placeholder') && !this.filled;
    }
}
