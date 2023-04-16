import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge: string;

}

const MENUITEMS = [
  { state: 'dashboard', name: 'Inicio', type: 'link', icon: 'home', badge: ''}
  // { state: 'button', type: 'link', name: 'Filtros', icon: 'crop_7_5', badge: '' },
  // { state: 'dashboard', name: 'Inicio', type: 'link', icon: 'home', badge: ''},
  // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5', badge: '' },
  // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy', badge: '' },
  // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list', badge: '' },
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline', badge: '' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab', badge: '' },
  // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web', badge: '' },
  // {
  //   state: 'expansion',
  //   type: 'link',
  //   name: 'Expansion Panel',
  //   icon: 'vertical_align_center'
  //   , badge: ''
  // },
  // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette', badge: '' },
  // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail', badge: '' },
  // {
  //   state: 'progress-snipper',
  //   type: 'link',
  //   name: 'Progress snipper',
  //   icon: 'border_horizontal', badge: ''
  // },
  // {
  //   state: 'progress',
  //   type: 'link',
  //   name: 'Progress Bar',
  //   icon: 'blur_circular', badge: ''
  // },
  // {
  //   state: 'dialog',
  //   type: 'link',
  //   name: 'Dialog',
  //   icon: 'assignment_turned_in', badge: ''
  // },
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant', badge: '' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb', badge: '' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode', badge: '' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive', badge: ''
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
