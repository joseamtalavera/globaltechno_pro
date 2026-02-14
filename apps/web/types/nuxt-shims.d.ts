declare function defineNuxtConfig(config: Record<string, unknown>): Record<string, unknown>;
declare function useRuntimeConfig(): {
  apiBase: string;
  public: {
    siteUrl: string;
    apiBase: string;
  };
};
declare function defineEventHandler<T>(handler: (event: unknown) => T | Promise<T>): unknown;
declare function createError(input: { statusCode: number; statusMessage: string }): Error;
declare const $fetch: <T>(url: string, init?: Record<string, unknown>) => Promise<T>;

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
  export default component;
}
