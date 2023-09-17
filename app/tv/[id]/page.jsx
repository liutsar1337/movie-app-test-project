import FilmPage from "@containers/FilmPage"

export const metadata = {
  title: "TV show details",
  desciption: "Discover & Share Your Favorite Movies"
}

const page = ({params}) => {
  return (
    <FilmPage isMovie={false} id={params.id}/>
  )
}

export default page