let srt:string = 'string'

function fnVoid():void {
}

interface objA{
    name: string
}
interface objA{
    age: number
}
// let obj:objA = {
    // name: '1'
// }


let arr:number[] = [1]

// 前几次都是函数定义，最后一次是函数实现。
function fn(params:number,params2:string):void
function fn(params:string,params2:number):void
function fn(params:string|number,params2:number | string):void{
}

fn(2,'')
// const div:HTMLDivElement = document.querySelector('div')
// function promise():Promise<number> {
//     return new Promise<number> ((res,rej)=>{
//         res(1)
//     })
//   }
// promise().then(res =>{
    
// })
    
function fnT<T>(params:T):T {
        return params
}
fnT(2)