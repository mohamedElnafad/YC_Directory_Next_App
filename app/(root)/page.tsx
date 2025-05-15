import SearchForm from '../../components/SearchForm';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams)?.query || '';
  return (
    <section className='pink_container'>
      <h1 className='heading'>
        Pitch yout starups, conncet with enterpreneurs
      </h1>
      <h3 className='sub-heading'>
        Submit Idea, Vote on Pitches, and Get Noticed in Virtual Competitons.
      </h3>
      <SearchForm query={query} />
    </section>
  );
}
