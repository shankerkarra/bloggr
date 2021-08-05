import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BloggrsService {
  async getAll(query = {}) {
    const res = await api.get('/api/blogs')
    logger.log(res.data)
    AppState.bloggr = res.data
  }

  async createBloggrs(bloggr) {
    const res = await api.post('api/blogs')
    await this.getAll()
  }
}

export const bloggrsService = new BloggrsService()
