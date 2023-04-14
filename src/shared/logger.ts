/**
 * koa Logger
 * @param {string} message
 * @param {string} level
 * @returns {void}
 * @memberof Logger
 */

import { Context } from "koa";

export class Logger {
  private static log(message: string, level: string): void {
    console.log(`[${level}]: ${message}`);
  }

  public static info(message: string): void {
    Logger.log(message, "INFO");
  }

  public static warn(message: string): void {
    Logger.log(message, "WARN");
  }

  public static error(message: string): void {
    Logger.log(message, "ERROR");
  }

  public static debug(message: string): void {
    Logger.log(message, "DEBUG");
  }
}

export class KoaLogger {
  public static async logger(ctx: Context, next: () => Promise<any>): Promise<void> {
    const start = new Date();
    await next();
    const ms = new Date().getTime() - start.getTime();
    Logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  }

  public static async errorLogger(ctx: Context, next: () => Promise<any>): Promise<void> {
    try {
      await next();
    } catch (err) {
      Logger.error(err as any);
      ctx.status = (err as any).statusCode || (err as any).status || 500;
      ctx.body = {
        message: (err as any).message
      };
    }
  }

  public static async notFound(ctx: Context): Promise<void> {
    ctx.status = 404;
    ctx.body = {
      message: "Not Found"
    };
  }
}