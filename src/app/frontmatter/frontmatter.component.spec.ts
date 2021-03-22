import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontmatterComponent } from './frontmatter.component';

describe('FrontmatterComponent', () => {
  let component: FrontmatterComponent;
  let fixture: ComponentFixture<FrontmatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontmatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontmatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
