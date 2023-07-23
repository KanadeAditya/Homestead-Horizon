
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <>
         <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </>
    );
  }

  return (
    <>
         <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
    </>
  );
}
 
export default PropertiesPage;
