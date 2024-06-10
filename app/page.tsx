'use client';
import { useQuery } from "@tanstack/react-query"
import { listPokemon } from "@/api/pokemon";
import { PokeCarousel } from "@/components/pokemon/poke-carousel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const query = useQuery({
    queryKey: ["listPokemons", currentPage],
    queryFn: () => listPokemon(10, currentPage * 10).then((resJson) => {
      return resJson
    }),
  })
  if (query.isLoading) return <div>Loading...</div>
  if (query.isError) return <div>Error</div>
  const data = query.data;
  return (
    <div className="flex justify-center flex-col items-center h-screen">
        { data && <PokeCarousel length={data.results.length} pokemons={data.results} />}
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Load More</Button>
    </div>
  );
}