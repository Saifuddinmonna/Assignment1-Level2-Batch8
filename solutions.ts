function multiplyValue(value: number, multiplier?: number): number {
    return value * (multiplier !== undefined ? multiplier : 2);
}


function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    return value ? "Active" : "Inactive";
}



function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        result.push(...array);
    }

    return result;
}
