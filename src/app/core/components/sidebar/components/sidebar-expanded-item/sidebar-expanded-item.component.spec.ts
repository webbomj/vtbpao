import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExpandedItemComponent } from './sidebar-expanded-item.component';

describe('SidebarExpandedItemComponent', () => {
  let component: SidebarExpandedItemComponent;
  let fixture: ComponentFixture<SidebarExpandedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarExpandedItemComponent]
    });
    fixture = TestBed.createComponent(SidebarExpandedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
