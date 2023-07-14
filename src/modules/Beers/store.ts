import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { BeerModel } from '../../lib/models/BeerModel';
import BeerService from '../../lib/services/beerService';
import { ErrorModel } from '../../lib/models/ErrorModel';

interface BeerState {
  beerData: BeerModel[];
  isLoading: boolean;
  errors: ErrorModel[];
}

interface BeerActions {
  setBeers: (beers: BeerModel[]) => void;
  fetchBeers: () => Promise<BeerModel[]>;
  fetchBeer: (recipeId: number) => Promise<BeerModel[]>;
}

export const useBeerStore = create<BeerState & BeerActions>()(
  devtools(
    immer((setState) => {
      return {
        beerData: [],
        isLoading: false,
        errors: [],
        setBeers: (beers) => {
          setState((state) => {
            state.beerData = beers;
          });
        },
        fetchBeers: async () => {
          setState((state) => {
            state.isLoading = true;
          });

          try {
            const collectedBeerData: BeerModel[] = [];

            let pageIndex = 1;
            while (true) {
              const response = await BeerService.fetchBeersByPage(pageIndex);
              const responseData = response.data as unknown as BeerModel[];

              if (responseData.length == 0) break;

              collectedBeerData.push(...responseData);
              pageIndex++;
            }

            setState((state) => {
              state.beerData = collectedBeerData;
            });

            return collectedBeerData;
          } catch (e) {
            setState((state) => {
              state.errors.push({
                title: 'Beer Store Error!',
                description: 'Something went wrong while fetching beers',
                status: 500,
              });
            });
            throw e;
          } finally {
            setState((state) => {
              state.isLoading = false;
            });
          }
        },
        fetchBeer: async (recipeId) => {
          setState((state) => {
            state.isLoading = true;
          });

          try {
            const response = await BeerService.fetchBeersByIndex(recipeId);
            const responseData = response.data as unknown as BeerModel[];
            setState((state) => {
              state.beerData = responseData;
            });
            return responseData;
          } catch (e) {
            setState((state) => {
              state.errors.push({
                title: 'Beer Store Error!',
                description: 'Something went wrong while fetching beers',
                status: 500,
              });
            });
            throw e;
          } finally {
            setState((state) => {
              state.isLoading = false;
            });
          }
        },
      };
    }),
  ),
);
