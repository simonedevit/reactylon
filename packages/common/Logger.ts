export class Logger {
    static prefix: string = '[Reactylon]';

    static log(...args: Array<any>) {
        const [first, ...rest] = args;
        console.log(`${this.prefix} - ${first}`, ...rest);
    }

    static error(...args: Array<any>) {
        const [first, ...rest] = args;
        console.error(`${this.prefix} - ${first}`, ...rest);
    }

    static group(title: string, labels: Array<Array<any>>) {
        console.group(`${this.prefix} - ${title}`);
        labels.forEach(label => {
            console.log(...label);
        });
        console.groupEnd();
    }
}
