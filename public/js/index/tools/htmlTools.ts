/** Contains useful HTML tools.
 * 
 * @author Alter
 * 
 */
export class HTMLTools {

    /** Returns a new gtml img element.
     * 
     * @param src The source of the image.
     * @param alt The alt of the image.
     * @returns 
     */
    static buildImageElement(src: string, alt: string): HTMLImageElement {
        const imageElement: HTMLImageElement = document.createElement("img");
        imageElement.src = src;
        imageElement.alt = alt;
        return imageElement;
    }

}