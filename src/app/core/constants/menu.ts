import { Menu } from "../models/interfaces/menu.interface";

export const MENU: Menu[] = [
  {
    label: 'menu.dashboard',
    route: 'dashboard',
    isActive: false,
    hasChildren: false,
  },

  {
    label: 'menu.show_case',
    route: '/admin',
    isActive: false,
    hasChildren: true,
    children: [
      { label: 'menu.table', route: 'show-table', isActive: false, hasChildren: false },
      { label: 'menu.form', route: 'form', isActive: false, hasChildren: false },
      { label: 'menu.date_picker', route: 'date-picker', isActive: false, hasChildren: false },
    ],
  },

]
