const PORT = 3090;
const base_url=`https://localhost:${PORT}`;
const login=document.querySelector('#login');
const btn=document.querySelector('button');

btn.onclick=async()=>
{
    try {
        const user = login.value.trim();
        console.log(user);
    //
    //     let data;
    //     let response = await fetch(`${base_url}/account/login`,
    //         {
    //             method: 'POST',
    //             headers: {'Authorization': `Basic ${btoa(user + ':' + passw)} `}
    //         });
    //     if (response.status === 200)
    //         data = response.json()
    //     else
    //         throw new Error(response.statusText);
    //     console.log(data);
    } catch(e)
     {
         console.log(e.message)
     }



}