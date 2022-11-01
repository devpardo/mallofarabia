export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        baseURL: 'https://my_api.com',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        } 
    })
  
    // Inject to context as $api
    inject('api', api)
}