export enum API_STATUS {
    SUCCESS = 'Success',
    FAILED = 'Failed'
};

export enum API_CODE {
    API_200 = 200,
    API_400 = 400,
    API_404 = 404,
    API_500 = 500
}

export interface IApiRes<T> {
    data: T;
    status: API_STATUS;
    message: string;
    code: API_CODE;
}