import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ageData, DataNameService, nameData } from '../services/data-name.service';
import { DataTableComponent } from './data-table.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [HttpClientModule],
      providers: [DataNameService],
    }).compileComponents();
  });

  it('should create a data table component', () => {
    const fixture = TestBed.createComponent(DataTableComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

    it(`should have dataRow`,async () => {
      const fixture = TestBed.createComponent(DataTableComponent);
      const app = fixture.componentInstance;
      app.ngOnInit()
      fixture.detectChanges()
      await fixture.whenStable()
        expect(app.dataRow.length).toBeTruthy();
    });

  it('should get names', (done) => {
    const service = TestBed.get(DataNameService);

    const expectedData = [
      {
        id: '1',
        firstName: 'Karen',
        lastName: 'Page',
      },
      {
        id: '2',
        firstName: 'Jessica',
        lastName: 'Jones',
      },
      {
        id: '3',
        firstName: 'Frank',
        lastName: 'Castle',
      },
      {
        id: '4',
        firstName: 'Matt',
        lastName: 'Murdock',
      },
      {
        id: '5',
        firstName: 'Luke',
        lastName: 'Cage',
      },
      {
        id: '6',
        firstName: 'Danny',
        lastName: 'Rand',
      },
      {
        id: '7',
        firstName: 'Trish',
        lastName: 'Walker',
      },
      {
        id: '8',
        firstName: 'Foggy',
        lastName: 'Nelson',
      },
      {
        id: '9',
        firstName: 'Jeri',
        lastName: 'Hogarth',
      },
    ];

    service.getNames().subscribe((data: nameData[]) => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('should get ages', (done) => {
    const service = TestBed.get(DataNameService);

    const expectedData = [
      {
        id: '1',
        age: 79,
      },
      {
        id: '2',
        age: 12,
      },
      {
        id: '4',
        age: 71,
      },
      {
        id: '5',
        age: 51,
      },
      {
        id: '8',
        age: 14,
      },
      {
        id: '9',
        age: 71,
      },
      {
        id: '10',
        age: 83,
      },
    ];

    service.getAge().subscribe((data: ageData[]) => {
      expect(data).toEqual(expectedData);
      done();
    });
  });
});
