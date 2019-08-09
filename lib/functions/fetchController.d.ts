export declare function requestController(url: string, accessToken: string, requestMethod: string, requestBody: any, options: any): Promise<any>;
export declare function createFetchController(options: any): (url: string, accessToken: string, requestMethod: string, requestBody: any) => Promise<any>;
