# CompanyApi

All URIs are relative to *http://localhost:44317*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiCompanyDropdownGet**](CompanyApi.md#apicompanydropdownget) | **GET** /api/Company/dropdown |  |
| [**apiCompanyPageGet**](CompanyApi.md#apicompanypageget) | **GET** /api/Company/page |  |



## apiCompanyDropdownGet

> Array&lt;DropdownModel&gt; apiCompanyDropdownGet()



### Example

```ts
import {
  Configuration,
  CompanyApi,
} from '';
import type { ApiCompanyDropdownGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CompanyApi(config);

  try {
    const data = await api.apiCompanyDropdownGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;DropdownModel&gt;**](DropdownModel.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiCompanyPageGet

> CompanyDtoPagedResult apiCompanyPageGet(companyName, companyGroupId, activeFlag, pageNumber, pageSize, sortBy, sortDesc)



### Example

```ts
import {
  Configuration,
  CompanyApi,
} from '';
import type { ApiCompanyPageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CompanyApi(config);

  const body = {
    // string (optional)
    companyName: companyName_example,
    // number (optional)
    companyGroupId: 789,
    // boolean (optional)
    activeFlag: true,
    // number (optional)
    pageNumber: 56,
    // number (optional)
    pageSize: 56,
    // string (optional)
    sortBy: sortBy_example,
    // boolean (optional)
    sortDesc: true,
  } satisfies ApiCompanyPageGetRequest;

  try {
    const data = await api.apiCompanyPageGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **companyName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **companyGroupId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **activeFlag** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **pageNumber** | `number` |  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortDesc** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CompanyDtoPagedResult**](CompanyDtoPagedResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

