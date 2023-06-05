import axios from './axios';
import { Package } from '../../store/modules/packages';

const allEndpoints = {
  packages: {
    getList: (
      page: number,
      limit: number,
      type: 'gh' | 'npm' = 'npm',
    ): Promise<{ data: Package[] }> =>
      axios.get('/stats/packages', { params: { page, limit, type } }),
  },
};

export default allEndpoints;
