import { WebPlugin } from '@capacitor/core';
import { plugsPlugin } from './definitions';

export class plugsWeb extends WebPlugin implements plugsPlugin {
  constructor() {
    super({
      name: 'plugs',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const plugs = new plugsWeb();

export { plugs };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(plugs);
