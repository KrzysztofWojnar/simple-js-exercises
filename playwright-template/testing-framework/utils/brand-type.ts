const brand: unique symbol = Symbol();
export type BrandType<T, BrandName> = T & { [brand]: BrandName };
