import FilmPage from "@containers/FilmPage"

export const metadata = {
  title: "Movie Details",
  desciption: "Discover & Share Your Favorite Movies"
}

const page = ({params}) => {
  return (
    <FilmPage isMovie={true} id={params.id}/>
  )
}

export default page