"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var multiple_date_picker_component_1 = require("./multiple-date-picker.component");
var MultipleDatePickerModule = (function () {
    function MultipleDatePickerModule() {
    }
    return MultipleDatePickerModule;
}());
MultipleDatePickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    multiple_date_picker_component_1.MultipleDatePickerComponent,
                ],
                exports: [multiple_date_picker_component_1.MultipleDatePickerComponent]
            },] },
];
/** @nocollapse */
MultipleDatePickerModule.ctorParameters = function () { return []; };
exports.MultipleDatePickerModule = MultipleDatePickerModule;
