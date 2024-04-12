import { AppService } from './app.service';
declare enum Ggg {
    AAA = "111",
    BBB = "222",
    CCC = "333"
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(aa: string): string;
    getHello2(bb: string): string;
    getHello3(cc: number): number;
    getHello4(dd: boolean): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    getHello5(ee: number[]): number;
    getHello6(ff: string[]): string[];
    getHello7(e: Ggg): Ggg;
    getHello8(uuid: string): string;
    getHello9(kkk: string): string;
    getHello10(aaa: string, bbb: number): string;
}
export {};
