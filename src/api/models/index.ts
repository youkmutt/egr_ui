/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface CompanyDto
 */
export interface CompanyDto {
    /**
     * 
     * @type {number}
     * @memberof CompanyDto
     */
    company_id: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDto
     */
    company_name: string | null;
    /**
     * 
     * @type {number}
     * @memberof CompanyDto
     */
    company_group_id: number;
}
/**
 * 
 * @export
 * @interface CompanyDtoPagedResult
 */
export interface CompanyDtoPagedResult {
    /**
     * 
     * @type {Array<CompanyDto>}
     * @memberof CompanyDtoPagedResult
     */
    items?: Array<CompanyDto> | null;
    /**
     * 
     * @type {number}
     * @memberof CompanyDtoPagedResult
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDtoPagedResult
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDtoPagedResult
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyDtoPagedResult
     */
    readonly totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDtoPagedResult
     */
    readonly hasPrevious?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyDtoPagedResult
     */
    readonly hasNext?: boolean;
}
/**
 * 
 * @export
 * @interface DropdownModel
 */
export interface DropdownModel {
    /**
     * 
     * @type {string}
     * @memberof DropdownModel
     */
    label: string | null;
    /**
     * 
     * @type {number}
     * @memberof DropdownModel
     */
    value: number;
}

/**
 * 
 * @export
 */
export const PermissionMode = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type PermissionMode = typeof PermissionMode[keyof typeof PermissionMode];

/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {number}
     * @memberof UserDTO
     */
    user_id: number;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    username: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    user_firstname: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    user_lastname: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    user_email: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    user_tel: string | null;
    /**
     * 
     * @type {PermissionMode}
     * @memberof UserDTO
     */
    permission_mode: PermissionMode;
    /**
     * 
     * @type {number}
     * @memberof UserDTO
     */
    permission_group_id?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTO
     */
    is_active: boolean;
}


/**
 * 
 * @export
 * @interface UserDTOPagedResult
 */
export interface UserDTOPagedResult {
    /**
     * 
     * @type {Array<UserDTO>}
     * @memberof UserDTOPagedResult
     */
    items?: Array<UserDTO> | null;
    /**
     * 
     * @type {number}
     * @memberof UserDTOPagedResult
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof UserDTOPagedResult
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof UserDTOPagedResult
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof UserDTOPagedResult
     */
    readonly totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTOPagedResult
     */
    readonly hasPrevious?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDTOPagedResult
     */
    readonly hasNext?: boolean;
}
