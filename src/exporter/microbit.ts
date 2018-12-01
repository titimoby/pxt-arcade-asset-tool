
import { AbstractEmitter } from "./abstract";

export class MicrobitEmitter extends AbstractEmitter {

    output(obj: any): string {
        return this.outputHeader() + `
    namespace basic {

        /**
         * Custom block generated by the editor extension
         */
        //% weight=100
        //% blockId="custom_extension_block" block="custom extension block"
        export function customMethod() {
            // TODO: add implementation
        }

    }`;
    }
}