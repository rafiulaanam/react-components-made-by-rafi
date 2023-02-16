//set it in index.js

import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

  const queryClient = new QueryClient()

    <QueryClientProvider client={queryClient}>

       
    </QueryClientProvider>




// set it in you components
import {useQuery} from 'react-query'

const url = `http://localhost:5000/bookings?email=${user?.email}`

const { data:bookings =[]} = useQuery({
  queryKey:['bookings' , user?.email],
  queryFn: async ()=>{
    const res =await fetch(url)
    const data = res.json()
    return data
  } 
})
