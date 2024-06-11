import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PokemonInfoModel } from "@/api/types";
import { PokemonCard } from "@/components/pokemon/Card";
import { cn } from "@/lib/utils";
type PokemonCarouselProps = {
  length: number;
  pokemons: PokemonInfoModel[];
} & React.HTMLProps<HTMLDivElement>;

const loadingItems = Array.from({ length: 10 }).map((_, index) => ({
  name: `loading-${index}`,
  url: "",
}));

export const PokeCarousel = ({length, pokemons, className}: PokemonCarouselProps) => {
  return (
    <Carousel className={cn(className)}>
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