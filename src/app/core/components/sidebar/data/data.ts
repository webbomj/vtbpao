import {
  ISidebarData,
  SidebarChildrenType,
  SidebarDataType,
} from './data.interface';

export const sidebarData: ISidebarData[] = [
  {
    name: 'Суперагент',
    subname: 'Банк ВТБ(ПАО)',
    type: SidebarDataType.expansion,
    icon: undefined,
    current: true,
    children: [
      {
        name: 'Управление',
        icon: 'work',
        type: SidebarChildrenType.header,
      },
      {
        name: 'Карточка контрагента',
        type: SidebarChildrenType.child,
        current: true,
      },
      {
        name: 'Договоры контрагента',
        type: SidebarChildrenType.child,
      },
    ],
  },
  {
    name: 'Субагенты',
    type: SidebarDataType.static,
    icon: 'group',
  },
];
