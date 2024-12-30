export interface SendEmployerResponse {
    results: any[];
    currentPage: number;
    totalDocuments: number;
    totalPages: number;
}

export interface EmployerRequest {
    pagination: number;
    searchKey: string;
    gender: string;
    fromDate: string;
    toDate: string;
    status: boolean;
}

export interface ResendOTPRequest {
    userId: string;
}

export interface ResendOTPResponse {
    success: boolean;
    message: string;
}