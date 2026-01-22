# SystemApi

All URIs are relative to *http://localhost:44317*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiSystemInitialPost**](SystemApi.md#apisysteminitialpost) | **POST** /api/System/initial |  |



## apiSystemInitialPost

> apiSystemInitialPost(key)



### Example

```ts
import {
  Configuration,
  SystemApi,
} from '';
import type { ApiSystemInitialPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new SystemApi(config);

  const body = {
    // string (optional)
    key: key_example,
  } satisfies ApiSystemInitialPostRequest;

  try {
    const data = await api.apiSystemInitialPost(body);
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
| **key** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

