import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/search', 
    headers: {
        Authorization: 'Bearer Z-8Wjcz7ZV6f4fqYwInGrhqtFiIlAYnacl6IfOxHJtK8SXCTiiLOcdHQjX6g914eHNKMQEwFDSZzwIGPd4MXchKAHmb-ulkugt99tFByxDB4tlRIuQHPgKhTmd98YHYx'
    }
})