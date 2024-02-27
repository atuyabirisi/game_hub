import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a5ec8a934ca4b85850d0200258a94ce',
    }
})