export interface MenuSectionItemLine {
  text: string;
  wrap?: boolean;
}

export interface MenuSectionItem {
  avatar?: string;
  icon?: string;
  title: string;
  lines?: MenuSectionItemLine[],
  href?: string;
}

export interface MenuSection {
  title?: string;
  expansion?: boolean;
  expanded?: boolean;
  items: MenuSectionItem[],
}
