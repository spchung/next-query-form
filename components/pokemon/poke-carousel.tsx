import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PokemonInfoModel } from "@/api/types";
import { PokemonCard } from "@/components/pokemon/card";

type PokemonCarouselProps = {
  length: number;
  pokemons: PokemonInfoModel[];
};

export const PokeCarousel = ({length, pokemons}: PokemonCarouselProps) => {
  return (
    <Carousel className="w-[80%]">
      <CarouselContent>
        {pokemons.map((pokemon, index) => (
          <CarouselItem className='basis-1/3' key={pokemon.name}>
            <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}