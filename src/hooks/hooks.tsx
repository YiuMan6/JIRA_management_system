import React, { useEffect,useState } from 'react'

export const useMount = (fn:()=>void):void => {
	useEffect(() => {
		fn()
	}, [])
}


//传入原本的[],init 传进来不知道是什么类型，init是array,那A就会变成array,
//init:A[] 意思是init等于A类型的数组,A等于A[] 里面的每一组对象的数据类型
// export const useArray = function <A>(init:A[]){
//   const [value, setValue] = useState(init)
//   return{
//     value,
//     setValue,
//     add:(item:A)=>{setValue([...value,item])},
//     remove:(index:number)=>{
//       const copy = [...value]
//       copy.slice(index,1)
//       console.log(copy)
//       setValue(copy)
//     }
//   }
// }


