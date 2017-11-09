export class ArrayHelper {
    static getUniqeValues(values: any[]) {
        const uniqValues = [];
        values.forEach(val => {
            if (uniqValues.indexOf(val) === -1) {
                uniqValues.push(val);
            }
        });
        return uniqValues;
    }
}
