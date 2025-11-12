
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/store' | 'REMOTE_ALIAS_IDENTIFIER/eventBus';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/eventBus' ? typeof import('REMOTE_ALIAS_IDENTIFIER/eventBus') :T extends 'REMOTE_ALIAS_IDENTIFIER/store' ? typeof import('REMOTE_ALIAS_IDENTIFIER/store') :any;