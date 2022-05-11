import { MenuSection } from './menu-section.interface';

export interface Menu {
  dense?: boolean;
  sections: MenuSection[],
}
