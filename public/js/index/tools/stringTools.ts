/** Contains useful string tool functions.
 * 
 * @author Alter
 * 
 */
export default class StringTools {

    /** Returns true if the string contains ONLY one or more spaces.
     * Returns false otherwise.
     * 
     * @param string 
     * @returns boolean
     */
    static isOnlySpaces(string: string): boolean {
        return new RegExp(/^ +$/).test(string);
    }

    /** Returns true if the string is of length 0 or contains ONLY one or more spaces.
     * Returns false otherwise.
     * 
     * @param string 
     * @returns boolean
     */
    static isBlank(string: string): boolean {
        return (string.length === 0 || this.isOnlySpaces(string));
    }

}