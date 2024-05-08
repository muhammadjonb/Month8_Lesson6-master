export type CountryTypes = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: string;
    };
  };
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  region: string;
};
