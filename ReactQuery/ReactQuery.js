//set it in index.js

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  const queryClient = new QueryClient()

    <QueryClientProvider client={queryClient}>

       
    </QueryClientProvider>




// set it in you components


const url = `http://localhost:5000/bookings?email=${user?.email}`

const { data:bookings =[]} = useQuery({
  queryKey:['bookings' , user?.email],
  queryFn: async ()=>{
    const res =await fetch(url)
    const data = res.json()
    return data
  } 
})
