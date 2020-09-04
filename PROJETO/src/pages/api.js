  
import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3000',
});

api.addAsyncRequestTransform(request => async () => {
    const id = await AsyncStorage.getItem('@CodeApi:id');
  
    if (id)
      request.headers['Authorization'] = `Bearer ${id}`;
  });
  
  api.addResponseTransform(response => {
    if (!response.ok) throw response;
  });

export default api;