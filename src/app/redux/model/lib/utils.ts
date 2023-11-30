export function getNearestFourDaysDate(): string[] {
    let now = new Date().getTime();
    let dayStep = 1000 * 60 * 60 * 24;
    let dateArray = [];

    for (let i = 0; i < 5; i++) {
        let timestampDate = now + dayStep * i;
        let dayTime = new Date(timestampDate);

        const year = dayTime.getFullYear();
        const month = dayTime.getMonth() + 1;
        const date = dayTime.getDate();

        const normalizedMonth = month < 10 ? `0${month}` : month;
        const normalizedDate = date < 10 ? `0${date}` : date;

        dateArray.push(`${year}-${normalizedMonth}-${normalizedDate}`);
    }

    return dateArray;
}
// [ '2023-11-29','2023-11-30','2023-12-1','2023-12-2','2023-12-3']

export function findAverage(array: number[]): number {
    let total = array.reduce(function (sum: number, elem: number) {
        return sum + elem;
    }, 0);
    let average = total / array.length;

    return average;
}

export function kelvinToCelsius(kelvinTemp: number): number {
    return kelvinTemp - 273.15;
}

export function findMostFrequentStringInArray(stringArray: string[]): string {
    const counts: Record<string, number> = {};

    for (const str of stringArray) {
        if (counts[str]) {
            counts[str]++;
        } else {
            counts[str] = 1;
        }
    }

    let mostFrequentString = '';
    let maxCount = 0;

    for (let [str, count] of Object.entries(counts)) {
        if (count > maxCount) {
            mostFrequentString = str;
            maxCount = count;
        }
    }

    return mostFrequentString;
}

export function timestampToTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const normalizedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const time = `${hours}:${normalizedMinutes}`;

    return time;
}
