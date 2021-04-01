export class Logger {
  public static info(message: string, context?: string): void {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `${!context ? "[Info]" : `[Info] [${context}]`}`,
      "\x1b[2m",
      new Date().toLocaleString(),
      "\x1b[0m",
      `${message}`
    );
  }

  public static error(message: string, context?: string): void {
    console.log(
      "\x1b[31m",
      `${!context ? "[Error]" : `[Error] [${context}]`}`,
      "\x1b[2m",
      new Date().toLocaleString(),
      "\x1b[0m",
      `${message}`
    );
  }
}
