import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBeerStore } from '../store';
import { Card, CardTextContainer } from '../../../components/custom/Card';

export const Beer = () => {
  const { beerData, fetchBeer } = useBeerStore();
  const { recipeId } = useParams();

  useEffect(() => {
    fetchBeer(Number(recipeId))
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [beerData]);

  return (
    <div className={'mt-2'}>
      {beerData.map((recipe) => {
        return (
          <Card key={recipe.id} navigationLink="" imageSRC={recipe?.image_url} imageALT={recipe?.name}>
            <CardTextContainer title={true}>{recipe?.name}</CardTextContainer>
            <CardTextContainer>First brewed: {recipe?.first_brewed}</CardTextContainer>
            <CardTextContainer>Boil volume: {recipe?.boil_volume.toString()}</CardTextContainer>
            <CardTextContainer>Attenuatuin level: {recipe?.attenuation_level}</CardTextContainer>
          </Card>
        );
      })}
    </div>
  );
};
