# UserApi

All URIs are relative to *http://localhost:44317*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiUserPagingGet**](UserApi.md#apiuserpagingget) | **GET** /api/User/paging |  |
| [**apiUserSigninPost**](UserApi.md#apiusersigninpost) | **POST** /api/User/signin |  |



## apiUserPagingGet

> UserDTOPagedResult apiUserPagingGet(username, firstName, lastName, activeFlag, pageNumber, pageSize, sortBy, sortDesc)



### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { ApiUserPagingGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new UserApi(config);

  const body = {
    // string (optional)
    username: username_example,
    // string (optional)
    firstName: firstName_example,
    // string (optional)
    lastName: lastName_example,
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
  } satisfies ApiUserPagingGetRequest;

  try {
    const data = await api.apiUserPagingGet(body);
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
| **username** | `string` |  | [Optional] [Defaults to `undefined`] |
| **firstName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **lastName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **activeFlag** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **pageNumber** | `number` |  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortDesc** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UserDTOPagedResult**](UserDTOPagedResult.md)

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


## apiUserSigninPost

> UserDTO apiUserSigninPost()



### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { ApiUserSigninPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new UserApi(config);

  try {
    const data = await api.apiUserSigninPost();
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

[**UserDTO**](UserDTO.md)

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

