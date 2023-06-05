import axios from './axios';
import {
  Package,
  PackageModel,
} from '../../store/modules/packages/packagesType';

const allEndpoints = {
  packages: {
    getList: (
      page: number,
      limit: number,
      type: 'gh' | 'npm' = 'npm',
    ): Promise<{ data: Package[] }> =>
      axios.get('/stats/packages', { params: { page, limit, type } }),
    getPackageInfo: (
      packageName: string,
    ): Promise<{ data: PackageModel }> => {
      return axios.get(`/stats/packages/npm/${packageName}`);
    },
  },
};

export default allEndpoints;
