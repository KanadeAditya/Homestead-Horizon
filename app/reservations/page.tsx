
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import ReservationsClient from "./ReservationClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <>
                <div className="bg-blue-100 h-full -z-10 fixed inset-0" ></div>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </>
        )
    }

    const reservations = await getReservations({ authorId: currentUser.id });

    if (reservations.length === 0) {
        return (
            <>
                <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your properties."
                />
            </>
        );
    }

    return (
        <><div className='bg-blue-100 h-full -z-10 fixed inset-0'>hello Homestead Horizon
        </div>
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </>
    );
}

export default ReservationsPage;
