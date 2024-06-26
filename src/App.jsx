import { useQuery,useMutation,useQueryClient,QueryClient,QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TaskboardApp from './Views/TaskboardApp/TaskboardApp';

import AuthProvider from './hooks/useAuth';
import { WEToast } from './Components/WEToast/WEToast';

const queryClient = new QueryClient();


function App() {

  return (
    
    <QueryClientProvider client={queryClient}>

      <AuthProvider>

        <TaskboardApp />

      </AuthProvider>
            
    </QueryClientProvider>
    
  )
}

export default App
