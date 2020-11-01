const BASE_API =`http://ec2-3-129-207-150.us-east-2.compute.amazonaws.com:8080`;

export default {
    checkUser: async (id) => {
        const req = await fetch(`${BASE_API}/api/usuarios${id}`,{
            method: 'get',
            /* headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id}) */
        });
        const json = await req.json();
        return json;
    },
    signIn: async (usuario,senha) => {
        const req = await fetch(`${BASE_API}/api/login`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({usuario,senha})
        });
        const json = await req.json();
        return json;
    },
    signUp: async (usuario,email,senha) => {
        const req = await fetch(`${BASE_API}/api/recuperar`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email,senha})
        });
        const json = await req.json();
        return json;
    }
}