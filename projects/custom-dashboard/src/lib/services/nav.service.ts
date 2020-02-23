import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class NavService {

  private title: { text: string, small: boolean, strong: boolean }[] = [];

  constructor(private titleService: Title) { }

  resetTitle() {
    this.title = [];
    return this;
  }

  pushTitle(text: string, small: boolean = false, strong: boolean = false) {
    this.title.push({ text, small, strong });
    this.setTitleByGeneratedTitle();
    return this;
  }

  popTitle() {
    this.title.pop();
    this.setTitleByGeneratedTitle();
    return this;
  }

  setTitleByGeneratedTitle() {
    this.titleService.setTitle(this.generateTitleHTML().replace(/<[^>]*>?/gm, '') + ' » Control de plagas');
  }

  generateTitleHTML() {
    if (!this.title.length) {
      return 'Control de plagas';
    }

    let html = '';

    for (const title of this.title) {
      if (html.length) {
        html += ' » ';
      }

      if (title.small) {
        html += '<small>';
      }
      if (title.strong) {
        html += '<strong>';
      }
      if (title.text) {
        html += title.text;
      }
      if (title.strong) {
        html += '</strong>';
      }
      if (title.small) {
        html += '</small>';
      }
    }

    return html;
  }

}
