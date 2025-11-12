
    export type RemoteKeys = 'jobsApp/Jobs';
    type PackageType<T> = T extends 'jobsApp/Jobs' ? typeof import('jobsApp/Jobs') :any;