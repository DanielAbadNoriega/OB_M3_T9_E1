const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

function calculator(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Introduce números para calcularlos.");
}

try {
  let num1 = 1;
  let num2 = 2;
  let str1 = "1";
  let str2 = "2";
  console.log(calculator(num1, num2));
  calculator(str1, str2);
} catch (error) {
  console.error(`[Error] Error durante el programa: ${error.message}`);
  logger.error(`[Error] Error durante el programa: ${error.message}`);
}

//logger.log("[Log] Mensaje personalizado");
logger.info("[Info] Mensaje personalizado");
logger.warn("[Warn] Mensaje personalizado");
logger.error("[Error] Mensaje personalizado");
logger.debug("[Debug] Mensaje personalizado");
