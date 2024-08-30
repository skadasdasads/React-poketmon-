import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Main from './pages/Main';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="mypage" element={<MyPage/>}/>
          <Route path="login" element={<Login/>}/>
          {/* 404 에러와 관련된 페이지 추가 */}
          <Route path="*" element={<Error/>}/> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
