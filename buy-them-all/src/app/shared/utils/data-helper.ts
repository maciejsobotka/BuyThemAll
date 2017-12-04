export class DataHelper {
    static hasValue(value: any) {
        return value !== undefined && value !== null && value !== NaN;
    }

    static toLocaleString(value: number): string {
        return value.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}
