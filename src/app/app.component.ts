import { Component } from '@angular/core';
import { Menu, Header, Content } from 'ngx-simple-dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  header: Header = {
    disabled: false,
    title: 'Title dashboard',
    color: 'primary',
    type: 'module',
  };

  menu: Menu = {
    dense: true,
    collapsedHeight: '48px',
    expandedHeight: '48px',
    expandedWidth: '312px',
    itemHeight: '32px',
    sections: [
      {
        expansion: true,
        expanded: true,
        title: 'Banner Home',
        icon: 'home',
        items: [
          {
            title: 'Indicadores Sitio',
            href: '/admin/indicators-config',
            icon: 'settings',
          },
          {
            title: 'Mensaje Rotativo',
            href: '/admin/messages-config',
            icon: 'settings',
          },
        ],
      },
      {
        expansion: true,
        expanded: true,
        title: 'Vinculaciones',
        items: [
          {
            title: 'Activas',
            href: '/admin/entailments-index',
            icon: 'share',
          },
          {
            title: 'No Vigentes',
            href: '/admin/entailments-no-active',
            icon: 'unpublished',
          },
        ],
      },
      {
        expansion: true,
        expanded: true,
        title: 'Mantenedor de Usuarios',
        items: [
          {
            title: 'Usuarios',
            href: '/admin/users',
            icon: 'people',
          },
          {
            title: 'Organizaciones',
            href: '/admin/companies',
            icon: 'home',
          },
        ],
      },
      {
        expansion: true,
        expanded: true,
        title: 'Servicios Comunicacionales',
        items: [
          {
            title: 'Actividades',
            href: '/admin/activities',
            icon: 'local_activity',
          },
          {
            title: 'Tipos de Eventos',
            href: '/admin/event-types',
            icon: 'event',
          },
          {
            title: 'Sub Tipos de Eventos',
            href: '/admin/event-subtypes',
            icon: 'emoji_events',
          },
          {
            title: 'Modalidades',
            href: '/admin/modalities',
            icon: 'apartment',
          },
          {
            title: 'Áreas Temáticas',
            href: '/admin/thematic-areas',
            icon: 'area_chart',
          },
          {
            title: 'Perfiles Participantes',
            href: '/admin/participating-profiles',
            icon: 'group',
          },
        ],
      },
      {
        expansion: true,
        expanded: true,
        title: 'Paramétricas',
        items: [
          {
            title: 'Tipos de Experiencia',
            href: '/admin/type-experiences',
            icon: 'home',
          },
          {
            title: 'Recursos Financieros',
            href: '/admin/source-resources',
            icon: 'home',
          },
          {
            title: 'Actividades Económicas',
            href: '/admin/economic-activities',
            icon: 'home',
          },
          {
            title: 'Tipos de Organizaciones',
            href: '/admin/type-companies',
            icon: 'home',
          },
          {
            title: 'Países',
            href: '/admin/countries',
            icon: 'flag',
          },
        ],
      },
      {
        expansion: true,
        expanded: true,
        title: 'Contenidos V1',
        items: [
          {
            title: 'Fondos Públicos Abiertos',
            href: '/admin/open-public-funds',
            icon: 'public',
          },
          {
            title: 'Noticias',
            href: '/admin/news',
            icon: 'feed',
          },
          {
            title: 'Indicadores',
            href: '/admin/indicators',
            icon: 'trending_up',
          },
          {
            title: 'Links de Interés',
            href: '/admin/links-of-interest',
            icon: 'link',
          },
          {
            title: 'Tipos de Visas',
            href: '/admin/type-visas',
            icon: 'perm_identity',
          },
          {
            title: 'Tipos de Grados',
            href: '/admin/type-grades',
            icon: 'grade',
          },
        ],
      },
    ],
  };

  content: Content = {
    header: {
      color: 'primary',
      disabled: true,
    },
  };
}
