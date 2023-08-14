export class PaginationUtils {
    public static calculatePages(amountOfEntries: number, offset: number): number {
        if (amountOfEntries === 0 || offset === 0) {
            return 0;
        }

        return Math.ceil(amountOfEntries / offset);
    }
}