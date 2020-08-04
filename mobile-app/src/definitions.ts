declare module '@capacitor/core' {
  interface PluginRegistry {
    plugs: plugsPlugin;
  }
}

export interface plugsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
