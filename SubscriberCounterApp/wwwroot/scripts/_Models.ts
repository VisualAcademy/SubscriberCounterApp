export interface ICounterInfo<T, V> {
    startYear: T,
    siteUrl: V
}

export interface IIncrementDecrementUpdate {
    increment(cnt: number): void;
    decrement(cnt: number): void;
    update(cnt: number): void;
}

export interface ICounterSettings {
    id: number;
    title: string;
    count: number;
    postCount?: number; // BlogCounter 클래스에서만 사용
}

export interface ICounterBase extends IIncrementDecrementUpdate, ICounterSettings {
    // Empty
}
