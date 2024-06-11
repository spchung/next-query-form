import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  
import { PokemonInfoModel } from "@/api/types"
import Image from "next/image"
import { useQueryClient, useQuery } from "@tanstack/react-query"
import { getPokemonByName } from "@/api/pokemon"
import { Skeleton } from "@/components/ui/skeleton"

type PokemonCardProps = {
  isTemp?: boolean;
} & PokemonInfoModel

export const PokemonCard = ({
  name,
  url,
  isTemp = false,
}:PokemonCardProps) => {
  const query = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonByName(name).then((resJson) => {
      return resJson;
    }),
  })

  const data = query.data

  if (query.isLoading || isTemp) {
    return (
      <Card className='min-w-[200px] h-[500px]'>
        <CardHeader>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[250px] w-full rounded-xl" />
        </CardContent>
        <CardFooter>
        <Skeleton className="h-4 w-[250px]" />
        </CardFooter>
      </Card>
    )
  }

  if (query.isError) {
    return <p>Error: {query.error.message}</p>
  }

  if (!data) {
    return null
  }

  return (
    <Card className='min-w-[200px] h-[500px]'>
      <CardHeader>
        <CardTitle>{name.toLocaleUpperCase()}</CardTitle>
        <CardDescription>Type: {data.types.map((item) => (item.type.name)).join(", ")} </CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={data.sprites.front_default} alt={name} width={280} height={280} />
      </CardContent>
      <CardFooter>
        <p>Height: {data.height}</p>
      </CardFooter>
    </Card>
  )
}