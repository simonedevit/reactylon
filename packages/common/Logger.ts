export class Logger {
    static prefix: string = '[Reactylon]';

    private static isEnabled() {
        return process.env.IS_LOGGING_ENABLED;
    }

    static log(...args: Array<any>) {
        if (Logger.isEnabled()) {
            const [first, ...rest] = args;
            console.log(`${this.prefix} - ${first}`, ...rest);
        }
    }

    static error(...args: Array<any>) {
        const [first, ...rest] = args;
        console.error(`${this.prefix} - ${first}`, ...rest);
    }

    static group(title: string, labels: Array<Array<any>>) {
        if (Logger.isEnabled()) {
            console.group(`${this.prefix} - ${title}`);
            labels.forEach(label => {
                console.log(...label);
            });
            console.groupEnd();
        }
    }
}
