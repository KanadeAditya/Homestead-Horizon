
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <>
            <div className="bg-blue-100 h-full -z-10 fixed inset-0"></div>
            <EmptyState
                title="Unauthorized"
                subtitle="Please login"
            />
        </>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
       <>
        <div className="bg-blue-100 h-full -z-10 fixed inset-0"></div>
         <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips."
        />
       </>
    );
  }

  return (
      <>
      <div className="bg-blue-100 h-full fixed inset-0 -z-10"></div>
        <TripsClient
            reservations={reservations}
            currentUser={currentUser}
        />
      </>
  );
}
 
export default TripsPage;
