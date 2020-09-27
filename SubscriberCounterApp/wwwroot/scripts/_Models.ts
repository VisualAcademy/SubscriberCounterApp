interface ICounterInfo<T, V> {
    startYear: T,
    siteUrl: V
}

interface IIncrementDecrementUpdate {
    increment(cnt: number): void;
    decrement(cnt: number): void;
    update(cnt: number): void;
}

interface ICounterSettings {
    id: number;
    title: string;
    count: number;
    postCount?: number; // BlogCounter 클래스에서만 사용
}

interface ICounterBase extends IIncrementDecrementUpdate, ICounterSettings {
    // Empty
}
