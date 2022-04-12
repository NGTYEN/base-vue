import axios from "axios";

// export function getCourses() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([{ name: 'web全栈', price: 899 }, { name: 'web高级', price: 900 }])
//         }, 1000);
//     })
// }

export function getCourses() {
    return axios.get('/api/courses').then(res => res.data)
}