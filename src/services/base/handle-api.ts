import api from './api'
interface ApiRequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    data?: any;
    headers?: Record<string, string>;
    rejectWithValue?: (value: any) => any;
}

interface ApiErrorResponse {
    error?: {
        code?: number;
        message?: string;
    };
    [key: string]: any;
}

export const handleApiRequest = async (
    method: ApiRequestOptions['method'],
    url: ApiRequestOptions['url'],
    data: ApiRequestOptions['data'] = null,
    headers: ApiRequestOptions['headers'] = {},

): Promise<any> => {
    try {
        const response = await api({
            method,
            url,
            data,
            headers,
        });
        return response.data;
    } catch (error: any) {
        const errorMessage: ApiErrorResponse =
            error.response?.data || error.message || 'An error occurred';
        console.log(
            `Error with ${method.toUpperCase()} request to ${url}:`,
            errorMessage,
        );
        throw error;
    }
};
