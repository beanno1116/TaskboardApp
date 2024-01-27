import { useQuery,useMutation,useQueryClient,QueryClient,QueryClientProvider } from 'react-query';
import TaskboardApp from './Views/TaskboardApp/TaskboardApp';
import { AuthStateProvider } from './contexts/AuthContext/AuthContext';
import AuthProvider from './hooks/useAuth';

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
