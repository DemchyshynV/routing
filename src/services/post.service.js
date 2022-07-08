import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const postService = {
    getAllByUserId: (userId) => axiosService.get(urls.posts, {params: {userId}})
}
