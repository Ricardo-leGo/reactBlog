import AuthProvider from './AuthStore/Provider';
import { mergeComponents } from './functions';

const BigProvider = [
  AuthProvider
]


export default mergeComponents(...BigProvider);

