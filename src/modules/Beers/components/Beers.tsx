import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBeerStore } from '../store';
import { paths } from '../../../const/paths';
import { Loader } from '../../../components/custom/Loader';
import { Card, CardTextContainer } from '../../../components/custom/Card';
import { Pagination } from '../../../components/navigation/Pagination';
import { BeerModel } from '../../../lib/models/BeerModel';
import { AiFillWarning } from 'react-icons/ai';

const beersPerPage = 15;

export const Beers = () => {
  const navigate = useNavigate();
  const { beerData, isLoading, fetchBeers, setBeers } = useBeerStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRecipes, setSelectedRecipes] = useState<number[]>([]);

  useEffect(() => {
    fetchBeers()
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
        navigate(paths.error);
      });
  }, [fetchBeers]);

  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentRecipes = beerData.slice(indexOfFirstBeer, indexOfLastBeer);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);

      if (pageNumber > Math.ceil(beerData.length / beersPerPage)) {
        fetchBeers().catch((e) => {
          console.log(e);
          navigate(paths.error);
        });
      }
    },
    [beerData.length, beersPerPage, fetchBeers, navigate],
  );

  const handleRightClick = useCallback(
    (event: MouseEvent<HTMLDivElement>, recipeId: number) => {
      event.preventDefault();
      if (selectedRecipes.includes(recipeId)) {
        setSelectedRecipes(selectedRecipes.filter((id) => id !== recipeId));
      } else {
        setSelectedRecipes([...selectedRecipes, recipeId]);
      }
    },
    [selectedRecipes],
  );

  const handleDelete = useCallback(() => {
    const updatedBeerRecipesData = beerData.filter((recipe) => !selectedRecipes.includes(recipe.id));
    setBeers(updatedBeerRecipesData);
    setSelectedRecipes([]);
  }, [beerData, selectedRecipes, setBeers]);

  if (isLoading) {
    return <Loader loaderText="Beer is loading...(sounds strange, but it's what we have)" />;
  }

  return (
    <>
      <div className={'w-full border-2 border-slate-900 bg-slate-800 rounded-lg mt-2'}>
        <h1 className={'text-white text-center text-2xl mx-8 my-2'}>Recipes list</h1>
      </div>

      {selectedRecipes.length > 0 && (
        <button onClick={handleDelete} className={'w-full mt-2 px-4 py-2 border-2 border-red-800 bg-red-700 text-white font-bold text-lg rounded-lg'}>
          Delete
        </button>
      )}

      {currentRecipes.length > 0 ? (
        <div className={`mt-2 grid grid-cols-3 gap-2`}>
          {currentRecipes.map((recipe: BeerModel) => (
            <div key={recipe.id} onContextMenu={(e) => handleRightClick(e, recipe.id)}>
              <Card
                navigationLink={`/${paths.recipes}/${recipe.id}`}
                imageSRC={recipe.image_url}
                imageALT={recipe.name}
                isActive={selectedRecipes.includes(recipe.id)}
              >
                <CardTextContainer title={true}>{recipe.name}</CardTextContainer>
                <CardTextContainer>First brewed: {recipe.first_brewed}</CardTextContainer>
                <CardTextContainer>Boil volume: {recipe.boil_volume.toString()}</CardTextContainer>
                <CardTextContainer>Attenuatuin level: {recipe.attenuation_level}</CardTextContainer>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className={'w-full flex mt-2 border-2 border-yellow-600 bg-yellow-500 rounded-lg py-2 px-4'}>
          <div className={'flex items-center'}>
            <AiFillWarning className="text-xl mr-1" />
            <h1 className={'text-white font-bold text-xl'}>Warning!</h1>
          </div>
          <div className={'w-full text-center text-lg'}>No beer recipies yet! Please, check again later.</div>
        </div>
      )}

      <Pagination currentPage={currentPage} itemsPerPage={beersPerPage} totalBeers={beerData.length} onPageChangeHandler={handlePageChange} />
    </>
  );
};
