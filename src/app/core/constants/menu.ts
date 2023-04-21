import { Menu } from "../models/interfaces/menu.interface";

export const MENU: Menu[] = [
  {
    label: 'menu.show_case',
    route: '/show-case',
    isActive: false,
    hasChildren: true,
    children: [
      { label: 'menu.table', route: '/show-case/table', isActive: false, hasChildren: false },
      { label: 'menu.form', route: '/show-case/form', isActive: false, hasChildren: false },
      { label: 'menu.date_picker', route: '/show-case/date-picker', isActive: false, hasChildren: false },
    ],
  },

  {
    label: 'menu.dashboard',
    route: '/dashboard',
    isActive: false,
    hasChildren: false,
  },
]
