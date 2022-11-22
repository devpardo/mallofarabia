export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        baseURL: 'https://gia1m6f55m.execute-api.eu-west-1.amazonaws.com/api',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        } 
    })
  
    // Inject to context as $api
    inject('api', api)
}   