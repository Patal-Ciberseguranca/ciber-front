import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/api2')({
  component: Api,
});

function Api() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.sampleapis.com/beers/ale').then((res) => res.json()),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Beer List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data ? data.map((beer) => (
          <div key={beer.id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={beer.image}
              alt={beer.name}
              className="h-40 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{beer.name}</h2>
            <p className="text-gray-600">${beer.price}</p>
          </div>
        )) : null}
      </div>
    </div>
  );
}
