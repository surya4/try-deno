import * as log from 'https://deno.land/std/log/mod.ts'

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      formatter: "{levelName} {msg}",
    }),
  },
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

const logger = log.getLogger();

export const logError = (resource, err) => {
  log.error(JSON.stringify({err, resource}))
}

export const logInfo = (resource, err) => {
  log.info(JSON.stringify({err, resource}))
}