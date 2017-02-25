import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MultipleDatePickerComponent implements OnInit, ControlValueAccessor {
    highlightDays: any;
    dayClick: string;
    dayHover: string;
    rightClick: string;
    monthChanged: any;
    fontAwesome: boolean;
    matIcons: boolean;
    monthClick: string;
    weekDaysOff: any;
    allDaysOff: string;
    daysAllowed: any;
    disableNavigation: boolean;
    disallowBackPastMonths: boolean;
    disallowGoFuturMonths: string;
    showDaysOfSurroundingMonths: boolean;
    cssDaysOfSurroundingMonths: any;
    fireEventsForDaysOfSurroundingMonths: string;
    disableDaysBefore: boolean;
    disableDaysAfter: boolean;
    changeYearPast: string;
    changeYearFuture: string;
    arrow: number;
    month: any;
    projectScope: any[];
    days: any[];
    _weekDaysOff: any;
    daysOff: any;
    disableBackButton: any;
    disableNextButton: any;
    daysOfWeek: any[];
    yearsForSelect: any;
    monthToDisplay: string;
    yearToDisplay: string;
    sundayFirstDay: boolean;
    constructor();
    ngOnInit(): void;
    arrowSelected(): 1 | 2;
    writeValue(value: any[]): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    _projectScope: any[];
    projectScope2: any[];
    checkNavigationButtons(): void;
    getDaysOfWeek(): any[];
    getMonthYearToDisplay(): any;
    getYearsForSelect(): any[];
    toggleDay(event: any, day: any): void;
    clearDays(): void;
    runGenerate(): void;
    rightClicked(event: any, day: any): void;
    getDayClasses(day: any): string;
    changeMonth(event: any, disable: any, add: any): void;
    changeYear(year: any): void;
    isDayOff(day: any): any;
    isSelected(day: any): boolean;
    generate(): void;
    findArrayofDays(): void;
}
