'use client';
import { useQuery } from "@tanstack/react-query"
import { listPokemon } from "@/api/pokemon";
import { PokeCarousel } from "@/components/pokemon/PokeCarousel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";
export default function PokemonLanding() {
  const [currentPage, setCurrentPage] = useState(1)
  const query = useQuery({
    queryKey: ["listPokemons", currentPage],
    queryFn: () => listPokemon(10, currentPage * 10).then((resJson) => {
      return resJson
    }),
  })
  const data = query.data;
  if (query.isLoading) {
    <div className="flex justify-center flex-col items-center h-screen">
        <Skeleton className="h-20 w-[75%] my-2" />
        <Skeleton className="h-20 w-[75%] my-2" />
        <Skeleton className="h-20 w-[75%] my-2" />
        <Skeleton className="h-20 w-[75%] my-2" />
    </div>
  }
  if (query.isError) return <div>Error</div>
  return (
    <div className="flex justify-center flex-col items-center h-screen">
        { !data && <div className="h-[500px]">
          <Skeleton className="h-20 w-[75%] my-2" />
          <Skeleton className="h-20 w-[75%] my-2" />
          <Skeleton className="h-20 w-[75%] my-2" />
          <Skeleton className="h-20 w-[75%] my-2" />
        </div>}
        { data && <PokeCarousel className="w-[80%] h-[500px]" length={data.results.length} pokemons={data.results}/>}
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Load More</Button>
    </div>
  );
}