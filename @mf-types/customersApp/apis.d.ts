
    export type RemoteKeys = 'customersApp/Customers';
    type PackageType<T> = T extends 'customersApp/Customers' ? typeof import('customersApp/Customers') :any;