import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {UserNew} from './regform';
import {HttpServiceRegForm} from './HttpServiceRegForm';
import {MatSnackBar} from '@angular/material';

export interface CountryGroup {
    letter: string;
    names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();

    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [HttpServiceRegForm]
})
export class RegistrationComponent implements OnInit {
    CountryForm: FormGroup = this.fb.group({
        CountryGroup: '',
    });
    CountryGroups: CountryGroup[] = [{
        letter: 'A',
        names: ['Австрия', 'Албания', 'Андорра', 'Азербайджан']
    }, {
        letter: 'Б',
        names: ['Бельгия', 'Белоруссия', 'Болгария', 'Босния и Герцеговина']
    }, {
        letter: 'В',
        names: ['Венгрия', 'Великобритания', 'Ватикан']
    }, {
        letter: 'Г',
        names: ['Германия', 'Греция', ' Грузию']
    }, {
        letter: 'Д',
        names: ['Дания']
    }, {
        letter: 'И',
        names: ['Ирландия', 'Исландия', 'Испания', 'Италия']
    }, {
        letter: 'К',
        names: ['Республика Кипр', 'Косово', 'Казахстан']
    }, {
        letter: 'Л',
        names: ['Латвия', 'Литва', 'Лихтенштейн', 'Люксембург']
    }, {
        letter: 'М',
        names: ['Македония', 'Мальта', 'Молдавия', 'Монако']
    }, {
        letter: 'Н',
        names: ['Нидерланды', 'Норвегия']
    }, {
        letter: 'П',
        names: ['Польша', 'Португалия']
    }, {
        letter: 'Р',
        names: ['Россия', 'Румыния']
    }, {
        letter: 'С',
        names: ['Сан-Марино', 'Сербия', 'Словакия',
            'Словения']
    }, {
        letter: 'У',
        names: ['Украина']
    }, {
        letter: 'Т',
        names: ['Турцию']
    }, {
        letter: 'Ф',
        names: ['Финляндия', 'Франция']
    }, {
        letter: 'Х',
        names: ['Хорватия']
    }, {
        letter: 'Ч',
        names: ['Чехия', 'Черногория']
    }, {
        letter: 'Ш',
        names: ['Швейцария', 'Швеция']
    }, {
        letter: 'Э',
        names: ['Эстония']
    }];

    CountryGroupOptions: Observable<CountryGroup[]>;

    constructor(private fb: FormBuilder,
                private httpService: HttpServiceRegForm,
                public snackBar: MatSnackBar) {
    }

    errorConnection = false;
    hide = true;
    done = false;
    userNew: UserNew = new UserNew();
    submit(userNew: UserNew) {
        this.httpService.postUserData(userNew)
            .subscribe(
                (data: any) => {
                    this.done = true;
                    this.openSnackBar();
                    window.location.reload();
                },
                error => {
                    this.errorConnection = true;
                    console.log(error);
                }
            );
    }

    openSnackBar() {
        this.snackBar.open('Вы успешно зарегестрировались!', 'OK', {
            duration: 2000,
        });
    }

    ngOnInit() {
        this.CountryGroupOptions = this.CountryForm.get('CountryGroup')!.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filterGroup(value))
            );
    }

    private _filterGroup(value: string): CountryGroup[] {
        if (value) {
            return this.CountryGroups
                .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
                .filter(group => group.names.length > 0);
        }

        return this.CountryGroups;

    }
}
