export abstract class BaseLogger {
    abstract Log(message: string): void;
}

export class LoggerConsole extends BaseLogger {
    Log(message: string) {
        console.log(message);
    }
}

export class LoggerEmail extends BaseLogger {
    Log(message: string) {
        console.log("Log to console" + message);
        console.log("Send email" + message);

    }
}

