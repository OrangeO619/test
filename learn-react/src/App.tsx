import { useReducer,useState,useEffect,useRef } from "react"

/* useRef */
export function App(){
  const timer=useRef<NodeJS.Timeout | null>(null)
  const [count,setCount] = useState(0)
  const handleClick = ()=>{
    timer.current = setInterval(()=>{
      setCount((prevCount)=>prevCount+1)
    },300)
  }
  const handleEnd = ()=>{
    if(timer){
      clearInterval(timer.current)
      timer.current = null
    }
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>开始计数</button>
      <button onClick={handleEnd}>结束计数</button>
    </div>
  )
}

/* useEffect */
/* interface UserData{
  name:string;
  email:string;
  username:string;
  phone:string;
  website:string;
}
export function App(){
  const [userId,setUserId] = useState(1);
  const [userData,setUserData] = useState<UserData | null>(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<string|null>(null);
  useEffect(()=>{
    const fetchUserData = async()=>{
      setLoading(true);
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok){
          throw new Error('网络请求失败');
        }
        const data = await response.json();
        setUserData(data);
      }catch(err){
        if(err instanceof Error){
          setError(err.message);
        }else{
          setError(String(err))
        }
      }finally{
        setLoading(false);
      }
    }
    fetchUserData();
  },[userId]);

  const handleUserChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUserId(parseInt(e.target.value))
  }
  return (
    <div>
      <h1>用户信息应用</h1>
      <label>
        输入用户ID:
        <input type="number" value={userId} onChange={handleUserChange} min={"1"} max={"10"}/>
      </label>
      {loading && <p>加载中...</p>}
      {error && <p style={{color:'red'}}>错误: {error}</p>}
      {userData && !loading &&(
        <div>
          <h2>用户信息</h2>
          <p>姓名：{userData.name}</p>
          <p>邮箱：{userData.email}</p>
          <p>电话：{userData.phone}</p>
          <p>用户名：{userData.username}</p>
          <p>网站：{userData.website}</p>
        </div>
      )}
    </div>
  )
} */

/* useReducer */
/* const initData = [
  { name: '小满(只)', price: 100, count: 1, id: 1, isEdit: false },
  { name: '中满(只)', price: 200, count: 1, id: 2, isEdit: false },
  { name: '大满(只)', price: 300, count: 1, id: 3, isEdit: false }
]
type Data = typeof initData
//newName？：string表示非必传
const reducer = (state: Data, action: {type:'add'|'sub'|'delete'|'edit'|'update_name'|'blur',id:number,newName?:string}) => {
  const item = state.find(item=>item.id===action.id)!
  switch (action.type){
    case 'add':
    item.count++
    return [...state]
    case 'sub':
    item.count--
    return [...state]
    case 'delete':
    return state.filter(item=>item.id!==action.id)
    case 'edit':
    item.isEdit=!item.isEdit
    return [...state]
    case 'update_name':
    item.name=action.newName!
    return [...state]
    case 'blur':
    item.isEdit=!item.isEdit
    return [...state]
    default:
      return state
  }
}

export const App = () => {
  const [data,dispatch] = useReducer(reducer, initData)
  return (
    <>
      <h1>购物车</h1>
      <table border={1} cellPadding={0} cellSpacing={0} width={800}>
        <thead>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td align="center">{item.isEdit? 
                <input type="text" value={item.name} 
                  onChange={(e)=>dispatch({type:'update_name',id:item.id,newName:e.target.value})}
                  onBlur={()=>dispatch({type:'blur',id:item.id})}></input>:item.name}</td>
              <td align="center">¥{item.price}</td>
              <td align="center">
                <button onClick={()=>dispatch({type:'add',id:item.id})}>+</button>
                {item.count}
                <button onClick={()=>dispatch({type:'sub',id:item.id})}>-</button>
              </td>
              <td align="center">¥{item.price * item.count}</td>
              <td align="center">
                <button onClick={()=>dispatch({type:'edit',id:item.id})}>修改</button>
                <button onClick={()=>dispatch({type:'delete',id:item.id})}>删除</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td align="right">总价：{data.reduce((a,b)=>a+b.price*b.count,0)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
 */