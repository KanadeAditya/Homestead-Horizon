
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <>
      <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </>
    );
  }

  return (
    <>
    <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </>
  );
}
 
export default ListingPage;
