
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
        <div className='bg-blue-100 h-full'>  <EmptyState /> 
        </div>
    );
  }

  return (
    <>
    <div className='bg-blue-100 h-full -z-10 fixed inset-0'>hello Homestead Horizon 
    </div>
     <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </>
  );
}
 
export default ListingPage;
