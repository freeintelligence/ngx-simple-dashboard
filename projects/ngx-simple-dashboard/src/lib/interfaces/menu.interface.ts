import { MenuSection } from './menu-section.interface';

export interface Menu {
  dense?: boolean;
  collapsedHeight?: string;
  expandedHeight?: string;
  itemHeight?: string;
  sections: MenuSection[],
}
