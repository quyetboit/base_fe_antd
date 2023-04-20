interface MenuBase {
  label: string,
  route: string,
  hasChildren: boolean,
  isActive: boolean,
  children?: Menu[],
}

type MenuWithChildren = MenuBase & { hasChildren: true; children: MenuBase[] };
type MenuWithoutChildren = MenuBase & { hasChildren: false; children?: never };

export type Menu = MenuWithChildren | MenuWithoutChildren;
