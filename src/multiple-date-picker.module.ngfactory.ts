/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './multiple-date-picker.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/i18n/tokens';
class MultipleDatePickerModuleInjector extends import0.NgModuleInjector<import1.MultipleDatePickerModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _MultipleDatePickerModule_3:import1.MultipleDatePickerModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  __RadioControlRegistry_5:import6.RadioControlRegistry;
  constructor(parent:import7.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import8.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _RadioControlRegistry_5():import6.RadioControlRegistry {
    if ((this.__RadioControlRegistry_5 == null)) { (this.__RadioControlRegistry_5 = new import6.RadioControlRegistry()); }
    return this.__RadioControlRegistry_5;
  }
  createInternal():import1.MultipleDatePickerModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._MultipleDatePickerModule_3 = new import1.MultipleDatePickerModule();
    return this._MultipleDatePickerModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import1.MultipleDatePickerModule)) { return this._MultipleDatePickerModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import6.RadioControlRegistry)) { return this._RadioControlRegistry_5; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MultipleDatePickerModuleNgFactory:import0.NgModuleFactory<import1.MultipleDatePickerModule> = new import0.NgModuleFactory(MultipleDatePickerModuleInjector,import1.MultipleDatePickerModule);