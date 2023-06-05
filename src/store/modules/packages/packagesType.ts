export type PackageModel = {
  hits: {
    rank: number;
    typeRank: number;
    total: number;
    dates: { [key: string]: number };
    prev: {
      rank: number;
      typeRank: number;
      total: number;
    };
  };
  bandwidth: {
    rank: number;
    typeRank: number;
    total: number;
    dates: { [key: string]: number };
    prev: {
      rank: number;
      typeRank: number;
      total: number;
    };
  };
  links: {
    self: string;
    versions: string;
  };
};

export type Package = {
  type: string;
  name: string;
  hits: number;
  bandwidth: number;
  prev: {
    hits: number;
    bandwidth: number;
  };
  links: {
    self: string;
    versions: string;
  };
};
