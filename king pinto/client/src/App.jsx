import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'

function App() {
  // const [state, dispatch] = useStoreContext();

  // const { loading, error, data: userData } = useQuery(QUERY_AUTHENTICATE);

  // useEffect(() => {
  //   if (userData) {
  //     dispatch({
  //       type: UPDATE_USER,
  //       user: userData.authenticate,
  //     });
  //   }
  // }, [userData]);

  // add loading later
  return (
  //   <h3 className="d-flex justify-content-center align-items-center vh-100">
  //     Loading...
  //   </h3>
  // ) : (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/register" element={<Auth isLogin={false} />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/success" element={<OrderProcessed />} /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
