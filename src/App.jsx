import { useQuery,useMutation,useQueryClient,QueryClient,QueryClientProvider } from 'react-query';
import TaskboardApp from './Views/TaskboardApp/TaskboardApp';
import { AuthStateProvider } from './contexts/AuthContext/AuthContext';


const queryClient = new QueryClient();


function App() {

  return (
    
    <QueryClientProvider client={queryClient}>

      <AuthStateProvider>

        <TaskboardApp />
                  
      </AuthStateProvider>

    </QueryClientProvider>
    
  )
}

export default App
