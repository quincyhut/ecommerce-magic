import { ISortCriteria } from "@/lib/types";

export interface Links {
    title: string;
    href: string
}

export interface ProductBreadCrumb {
    links: Links[],
    hideSorting?: boolean,
    productLists?: Object[],
    applySorting: (result: Object[]) => void;
}